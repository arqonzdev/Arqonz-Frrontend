import { ProfessionalCard } from "@/types/professional";

export type RecommendedSection = {
  title: string;
  list: ProfessionalCard[];
};

export const recommendedSections: RecommendedSection[] = [
  {
    title: "Connect with Architects",
    list: [
      {
        id: 1,
        rank: 1,
        name: "Antony Jose",
        title: "Professional Interior Architectural Designer",
        completedProjects: 150,
        locations: ["Bangalore", "Chennai", "Kerala"],
        categories: ["Residential", "Commercial", "Renovation", "Plots"],
        rating: 4.8,
        reviewsCount: 10000,
        image: "/images/professionals/antony1.jpg",
        profileUrl: "/professionals/1"
      },
      {
        id: 2,
        rank: 2,
        name: "Antony Jose",
        title: "Professional Interior Architectural Designer",
        completedProjects: 150,
        locations: ["Bangalore", "Chennai", "Kerala"],
        categories: ["Residential", "Commercial", "Renovation", "Plots"],
        rating: 4.8,
        reviewsCount: 10000,
        image: "/images/professionals/antony2.jpg",
        profileUrl: "/professionals/2"
      },
      {
        id: 3,
        rank: 3,
        name: "Antony Jose",
        title: "Professional Interior Architectural Designer",
        completedProjects: 150,
        locations: ["Bangalore", "Chennai", "Kerala"],
        categories: ["Residential", "Commercial", "Renovation", "Plots"],
        rating: 4.8,
        reviewsCount: 10000,
        image: "/images/professionals/antony3.jpg",
        profileUrl: "/professionals/3"
      }
    ]
  },


// Designers for you

  {
    title: "Designers for you",   
    list: [
       {
        id: 3,
        rank: 3,
        name: "Antony Jose",
        title: "Professional Interior Architectural Designer",
        completedProjects: 150,
        locations: ["Bangalore", "Chennai", "Kerala"],
        categories: ["Residential", "Commercial", "Renovation", "Plots"],
        rating: 4.8,
        reviewsCount: 10000,
        image: "/images/professionals/antony3.jpg",
        profileUrl: "/professionals/3"
      }
    ]
  },



  // Engineers near You
  {
    title: "Engineers near You",
    list: [
      {
        id: 3,
        rank: 3,
        name: "Antony Jose",
        title: "Professional Interior Architectural Designer",
        completedProjects: 150,
        locations: ["Bangalore", "Chennai", "Kerala"],
        categories: ["Residential", "Commercial", "Renovation", "Plots"],
        rating: 4.8,
        reviewsCount: 10000,
        image: "/images/professionals/antony3.jpg",
        profileUrl: "/professionals/3"
      }
    ]
  }
];
