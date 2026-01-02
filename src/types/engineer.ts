export type Engineer = {
  id: number;
  name: string;
  company: string;
  city: string;
  rating: number;
  reviews: number;
  verified: boolean;
  years: number;
  projects: number;
  sectors: string[];
  image: string;

  designation?: string;
  hourlyFee?: number;   // ⭐ IMPORTANT
};
