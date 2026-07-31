export type Platform = "PC" | "PlayStation" | "Xbox" | "Nintendo Switch" | "Mobile";

export type Game = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  coverImage: string;
  bannerImage: string;
  screenshots: string[];
  trailerUrl?: string;
  genre: string;
  platforms: Platform[];
  releaseDate: string;
  features: string[];
  storeLinks: {
    label: string;
    url: string;
  }[];
};

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  author: string;
  tags: string[];
};

export type JobOpening = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
};
