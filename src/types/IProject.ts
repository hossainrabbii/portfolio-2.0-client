import { ICategory } from "./ICategory";

export interface IProject {
  title: string;
  description: string;
  fullDescription: string;
  category: ICategory;
  image: string;
  gallery: string[];
  client: string;
  year: string;
  duration: string;
  role: string;
  tools: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  comments: any[];
  likes: number;
  liveUrl?: string;
  github?: string;
}
