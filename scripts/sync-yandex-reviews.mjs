/**
 * Синхронизация отзывов с Яндекс Карт в src/data/yandex-reviews.json.
 * Запуск: npm run sync:reviews
 */
import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';

const ORG_ID = '143671883234';
const REVIEWS_URL = `https://yandex.by/maps/org/-/${ORG_ID}/reviews/?lang=ru`;
const OUTPUT = join(dirname(fileURLToPath(import.meta.url)), '../src/data/yandex-reviews.json');

function extractReviewsJson(html) {
  const marker = '"reviews":[';
  const start = html.indexOf(marker);
  if (start === -1) return null;

  const chunk = html.slice(start);
  const arrayStart = chunk.indexOf('[');
  let depth = 0;

  for (let i = arrayStart; i < chunk.length; i++) {
    const char = chunk[i];
    if (char === '[') depth++;
    else if (char === ']') {
      depth--;
      if (depth === 0) {
        return JSON.parse(chunk.slice(arrayStart, i + 1));
      }
    }
  }

  return null;
}

function extractAggregateRating(html) {
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

function formatReviewDate(iso) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

function mapReview(raw) {
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

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ locale: 'ru-RU' });

try {
  await page.goto(REVIEWS_URL, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  await page.waitForTimeout(2000);

  const html = await page.content();

  if (html.includes('captcha') || html.includes('Вы не робот') || html.includes('не робат')) {
    throw new Error('Яндекс показал капчу. Запустите скрипт локально или повторите позже.');
  }

  const rawReviews = extractReviewsJson(html);
  if (!rawReviews?.length) {
    throw new Error('Не удалось найти отзывы на странице Яндекс Карт.');
  }

  const reviews = rawReviews.map(mapReview).filter(Boolean);
  const aggregateRating = extractAggregateRating(html);
  aggregateRating.reviewCount = Math.max(aggregateRating.reviewCount, reviews.length);

  const payload = {
    reviews,
    aggregateRating,
    syncedAt: new Date().toISOString(),
  };

  await writeFile(OUTPUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`Сохранено ${reviews.length} отзывов → ${OUTPUT}`);
  console.log(`Рейтинг: ${aggregateRating.ratingValue} (${aggregateRating.reviewCount} отзывов)`);
} finally {
  await browser.close();
}
