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
        image: "/professionals/antony1.png",
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
        image: "/professionals/antony1.png",
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
        image: "/professionals/antony3.png",
        profileUrl: "/professionals/3"
      }
    ]
  },


// Designers for you

  {
    title: "Designers for you",   
    list: [
       {
        id: 4,
        rank: 4,
        name: "Antony Jose",
        title: "Professional Interior Architectural Designer",
        completedProjects: 150,
        locations: ["Bangalore", "Chennai", "Kerala"],
        categories: ["Residential", "Commercial", "Renovation", "Plots"],
        rating: 4.8,
        reviewsCount: 10000,
        image: "/professionals/antony3.png",
        profileUrl: "/professionals/3"
      },
      
      {
        id: 5,
        rank: 5,
        name: "Antony Jose",
        title: "Professional Interior Architectural Designer",
        completedProjects: 150,
        locations: ["Bangalore", "Chennai", "Kerala"],
        categories: ["Residential", "Commercial", "Renovation", "Plots"],
        rating: 4.8,
        reviewsCount: 10000,
        image: "/professionals/antony1.png",
        profileUrl: "/professionals/1"
      },
      {
        id: 6,
        rank: 6,
        name: "Antony Jose",
        title: "Professional Interior Architectural Designer",
        completedProjects: 150,
        locations: ["Bangalore", "Chennai", "Kerala"],
        categories: ["Residential", "Commercial", "Renovation", "Plots"],
        rating: 4.8,
        reviewsCount: 10000,
        image: "/professionals/antony1.png",
        profileUrl: "/professionals/1"
      },
    ]
  },



  // Engineers near You
  {
    title: "Engineers near You",
    list: [
      {
        id: 7,
        rank: 7,
        name: "Antony Jose",
        title: "Professional Interior Architectural Designer",
        completedProjects: 150,
        locations: ["Bangalore", "Chennai", "Kerala"],
        categories: ["Residential", "Commercial", "Renovation", "Plots"],
        rating: 4.8,
        reviewsCount: 10000,
        image: "/professionals/antony3.png",
        profileUrl: "/professionals/3"
      },
      {
        id: 8,
        rank: 8,
        name: "Antony Jose",
        title: "Professional Interior Architectural Designer",
        completedProjects: 150,
        locations: ["Bangalore", "Chennai", "Kerala"],
        categories: ["Residential", "Commercial", "Renovation", "Plots"],
        rating: 4.8,
        reviewsCount: 10000,
        image: "/professionals/antony1.png",
        profileUrl: "/professionals/1"
      },

      {
        id: 9,
        rank: 9,
        name: "Antony Jose",
        title: "Professional Interior Architectural Designer",
        completedProjects: 150,
        locations: ["Bangalore", "Chennai", "Kerala"],
        categories: ["Residential", "Commercial", "Renovation", "Plots"],
        rating: 4.8,
        reviewsCount: 10000,
        image: "/professionals/antony1.png",
        profileUrl: "/professionals/1"
      }
    ]
  }
];
