import yandexReviewsData from './yandex-reviews.json';
import { client } from './client';
import { fetchYandexReviews } from '../lib/yandex-reviews';
import type { Review, ReviewsData } from '../lib/review';

export type { Review };
export type YandexReviewsData = ReviewsData;

/** Локальная копия на случай отсутствия yandex-reviews.json. */
const fallbackData: ReviewsData = {
  reviews: [
    {
      quote:
        'Очень доволен работой Артёма и его коллеги. Хорошо объясняют процесс и ценообразование. Пробурили нам скважину 17 метров за один рабочий день.',
      name: 'Leonid Orlik',
      location: 'Яндекс Карты',
      rating: 5,
    },
  ],
  aggregateRating: { ratingValue: 4.4, reviewCount: 1 },
};

function fromJsonFile(): ReviewsData {
  const { reviews, aggregateRating } = yandexReviewsData;
  return { reviews, aggregateRating };
}

let cached: ReviewsData | undefined;

/**
 * Отзывы Яндекс Карт.
 * По умолчанию — из `src/data/yandex-reviews.json` (обновляется через `npm run sync:reviews`).
 * При `YANDEX_REVIEWS_LIVE=1` — попытка загрузки напрямую с Яндекс Карт при сборке.
 */
export async function getReviewsData(): Promise<ReviewsData> {
  if (cached) return cached;

  if (process.env.YANDEX_REVIEWS_LIVE === '1') {
    try {
      cached = await fetchYandexReviews(client.yandexOrgId);
      console.info(
        `[reviews] Загружено ${cached.reviews.length} отзывов с Яндекс Карт (рейтинг ${cached.aggregateRating.ratingValue}).`,
      );
      return cached;
    } catch (error) {
      console.warn('[reviews] Live-загрузка не удалась, используется JSON.', error);
    }
  }

  try {
    cached = fromJsonFile();
  } catch {
    cached = fallbackData;
  }

  return cached;
}
