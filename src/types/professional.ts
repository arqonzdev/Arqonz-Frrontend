export type ProfessionalCard = {
  id: number;
  name: string;
  title: string;
  completedProjects: number;
  locations: string[];
  categories: string[];
  rating: number;
  reviewsCount: number;
  image: string;
  rank: number;
  profileUrl: string;
};


export type CommercialPro = {
  id: number;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  hourlyFee: number;
  image: string;
};


export type Team = {
  id: number;
  name: string;
  tagline: string;
  rating: number;
  reviews: number;
  hourlyFee: number;
  image: string;
  profileUrl: string;
};
