export interface Review {
    id: number;
    name: string;
    position: string;
    image: string;
    review: string;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: 'JDaniel K.',
    position: 'CEO',
    image: '/mock-review-photo.png',
    review:
      'Arbejdet blev udført på et højt niveau. Teamet forstod hurtigt opgaven, kom med gode forslag og leverede alt til den aftalte tid. Hjemmesiden blev moderne, brugervenlig og passer perfekt til vores mål. Kan varmt anbefales!',
  },
  {
    id: 2,
    name: 'Mark M.',
    position: 'CTO',
    image: '/mock-review-photo.png',
    review:
      'Arbejdet blev udført på et højt niveau. Teamet forstod hurtigt opgaven, kom med gode forslag og leverede alt til den aftalte tid. Hjemmesiden blev moderne, brugervenlig og passer perfekt til vores mål. Kan varmt anbefales!',
  },
  {
    id: 3,
    name: 'John Doe',
    position: 'COO',
    image: '/mock-review-photo.png',
    review:
      'Arbejdet blev udført på et højt niveau. Teamet forstod hurtigt opgaven, kom med gode forslag og leverede alt til den aftalte tid. Hjemmesiden blev moderne, brugervenlig og passer perfekt til vores mål. Kan varmt anbefales!',
  },
];
