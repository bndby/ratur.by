import type { Review, ReviewsData } from './review';

export type { Review };
export type YandexReviewsData = ReviewsData;

interface YandexReviewAuthor {
  name?: string;
  professionLevel?: string;
}

interface YandexReviewRaw {
  rating?: number;
  text?: string;
  updatedTime?: string;
  author?: YandexReviewAuthor;
}

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function isCaptchaPage(html: string): boolean {
  return (
    html.includes('smart-captcha') ||
    html.includes('checkbox-captcha') ||
    /Вы не робот|не робат/i.test(html)
  );
}

function reviewsPageUrl(orgId: string, lang = 'ru'): string {
  return `https://yandex.by/maps/org/-/${orgId}/reviews/?lang=${lang}`;
}

function extractReviewsJson(html: string): YandexReviewRaw[] {
  const marker = '"reviews":[';
  const start = html.indexOf(marker);
  if (start === -1) return [];

  const chunk = html.slice(start);
  const arrayStart = chunk.indexOf('[');
  let depth = 0;

  for (let i = arrayStart; i < chunk.length; i++) {
    const char = chunk[i];
    if (char === '[') depth++;
    else if (char === ']') {
      depth--;
      if (depth === 0) {
        return JSON.parse(chunk.slice(arrayStart, i + 1)) as YandexReviewRaw[];
      }
    }
  }

  return [];
}

function extractAggregateRating(html: string): YandexReviewsData['aggregateRating'] {
  const match = html.match(
    /"ratingValue"\s*:\s*([\d.]+)[\s\S]{0,200}?"reviewCount"\s*:\s*(\d+)/,
  );

  if (!match) {
    return { ratingValue: 5, reviewCount: 0 };
  }

  return {
    ratingValue: Math.round(parseFloat(match[1]) * 10) / 10,
    reviewCount: parseInt(match[2], 10),
  };
}

function formatReviewDate(iso: string): string {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

function mapReview(raw: YandexReviewRaw): Review | null {
  const quote = raw.text?.trim();
  const name = raw.author?.name?.trim();
  if (!quote || !name) return null;

  return {
    quote,
    name,
    location: raw.author?.professionLevel?.trim() ?? '',
    rating: raw.rating ?? 5,
    date: raw.updatedTime ? formatReviewDate(raw.updatedTime) : undefined,
  };
}

export async function fetchYandexReviews(orgId: string): Promise<YandexReviewsData> {
  const url = reviewsPageUrl(orgId);
  const response = await fetch(url, {
    headers: { 'User-Agent': USER_AGENT, Accept: 'text/html' },
  });

  if (!response.ok) {
    throw new Error(`Yandex reviews fetch failed: ${response.status} ${url}`);
  }

  const html = await response.text();

  if (isCaptchaPage(html)) {
    throw new Error(
      `Yandex captcha blocked fetch for ${url}. Run "npm run sync:reviews" locally instead.`,
    );
  }

  const rawReviews = extractReviewsJson(html);
  const reviews = rawReviews
    .map(mapReview)
    .filter((review): review is Review => review !== null);

  if (reviews.length === 0) {
    throw new Error(`No reviews parsed from ${url}`);
  }

  const aggregateRating = extractAggregateRating(html);
  aggregateRating.reviewCount = Math.max(aggregateRating.reviewCount, reviews.length);

  return { reviews, aggregateRating };
}
