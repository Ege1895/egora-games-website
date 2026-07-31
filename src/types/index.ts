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
