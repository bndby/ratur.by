export interface Review {
  quote: string;
  name: string;
  location: string;
  rating: number;
  date?: string;
}

export interface ReviewsData {
  reviews: Review[];
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
  };
  /** Google: публикации отзывов отключены для организации */
  restricted?: boolean;
}
