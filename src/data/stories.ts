export type Story = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
  featured?: boolean;
};

export const stories: Story[] = [
  {
    id: 1,
    featured: true,
    category: "Commercial",
    title: "Top 5 Emerging Localities for Smart Investment",
    description:
      "Stay updated with fresh insights from the world of property, construction, and design. Discover trends, expert opinions, and real project stories shaping today’s market.",
    image: "/images/stories/story-main.jpg",
    href: "/stories/top-5-emerging-localities",
  },
  {
    id: 2,
    category: "Rental Space",
    title: "Top 5 Emerging Localities for Smart Investment",
    description:
      "Stay updated with fresh insights from the world of property, construction, and design. Discover trends, expert opinions, and real project stories shaping today’s market.",
    image: "/images/stories/story-1.jpg",
    href: "/stories/emerging-localities-rental",
  },
  {
    id: 3,
    category: "Rental Space",
    title: "Top 5 Emerging Localities for Smart Investment",
    description:
      "Stay updated with fresh insights from the world of property, construction, and design. Discover trends, expert opinions, and real project stories shaping today’s market.",
    image: "/images/stories/story-2.jpg",
    href: "/stories/emerging-localities-smart",
  },
  {
    id: 4,
    category: "Rental Space",
    title: "Top 5 Emerging Localities for Smart Investment",
    description:
      "Stay updated with fresh insights from the world of property, construction, and design. Discover trends, expert opinions, and real project stories shaping today’s market.",
    image: "/images/stories/story-3.jpg",
    href: "/stories/emerging-localities-growth",
  },
];
