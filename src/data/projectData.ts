import type { StaticImageData } from "next/image";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";
import portfolio4 from "@/assets/portfolio-4.png";

export interface ProjectComment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string | StaticImageData;
  gallery: (string | StaticImageData)[];
  client: string;
  duration: string;
  year: string;
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
  likes: number;
  comments: ProjectComment[];
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "m-mockups-macbook-air",
    title: "M-Mockups MacBook Air",
    category: "UI Design",
    description:
      "Premium mockup collection featuring the latest MacBook Air designs with customizable scenes.",
    fullDescription: `
M-Mockups is a premium collection of high-fidelity MacBook Air mockups designed for designers and developers who demand perfection. 

This project showcases the intersection of photography, 3D rendering, and digital design to create mockups that are indistinguishable from real product shots.

Each mockup is meticulously crafted with attention to lighting, shadows, and reflections, ensuring your designs look stunning in any presentation context.
    `,
    image: project1,
    gallery: [project1, portfolio1, portfolio2],
    client: "Internal Project",
    duration: "3 months",
    year: "2024",
    role: "Lead Designer",
    tools: ["Figma", "Blender", "Photoshop", "After Effects"],
    challenges: [
      "Creating photorealistic renders that match real product photography",
      "Ensuring mockups work across different design contexts",
      "Building a scalable system for multiple device variants",
    ],
    solutions: [
      "Developed a custom lighting rig in Blender for consistent results",
      "Created smart object templates for quick customization",
      "Built a modular component system for different scenes",
    ],
    results: [
      "Over 10,000 downloads in the first month",
      "Featured on major design resource platforms",
      "95% positive user feedback rating",
    ],
    testimonial: {
      quote:
        "These mockups elevated our client presentations to a whole new level. The attention to detail is incredible.",
      author: "Jessica Wong",
      role: "Creative Director at Studio Nova",
    },
    likes: 423,
    comments: [
      {
        id: "pc1",
        author: { name: "Thomas Anderson", avatar: "/placeholder.svg" },
        content:
          "The level of detail in these mockups is insane. Best I've ever used!",
        createdAt: "2024-01-20",
        likes: 24,
      },
      {
        id: "pc2",
        author: { name: "Mia Roberts", avatar: "/placeholder.svg" },
        content:
          "Perfect for my portfolio presentations. Thank you for sharing!",
        createdAt: "2024-01-18",
        likes: 18,
      },
    ],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "2",
    slug: "luminui-design-system",
    title: "LuminUI Design System",
    category: "Design System",
    description:
      "A comprehensive design system built for scalability and consistency across enterprise applications.",
    fullDescription: `
LuminUI is a complete design system that powers digital products across multiple platforms. Built with scalability in mind, it provides a robust foundation for creating consistent user experiences.

The system includes over 200 components, detailed documentation, and a comprehensive token system that enables seamless theming and customization.

From atomic elements to complex patterns, LuminUI covers every aspect of modern interface design.
    `,
    image: project2,
    gallery: [project2, portfolio3, portfolio4],
    client: "Enterprise Client",
    duration: "8 months",
    year: "2023",
    role: "Design System Lead",
    tools: ["Figma", "Storybook", "React", "TypeScript"],
    challenges: [
      "Unifying design language across 12 different product teams",
      "Maintaining consistency while allowing for product-specific needs",
      "Creating documentation that serves both designers and developers",
    ],
    solutions: [
      "Established a governance model with clear contribution guidelines",
      "Created a flexible token system for contextual customization",
      "Built interactive documentation with live code examples",
    ],
    results: [
      "Reduced design-to-development time by 40%",
      "Achieved 98% component adoption across teams",
      "Decreased design inconsistencies by 85%",
    ],
    testimonial: {
      quote:
        "LuminUI transformed how we build products. The consistency and speed improvements are remarkable.",
      author: "Michael Chen",
      role: "VP of Product at TechCorp",
    },
    likes: 567,
    comments: [
      {
        id: "pc3",
        author: { name: "Rachel Green", avatar: "/placeholder.svg" },
        content:
          "This is exactly what enterprise design systems should look like. Brilliant work!",
        createdAt: "2024-01-15",
        likes: 31,
      },
    ],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "3",
    slug: "website-redesign-ecommerce",
    title: "E-Commerce Website Redesign",
    category: "Web Design",
    description:
      "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    fullDescription: `
A comprehensive redesign project for a major e-commerce platform, focusing on improving the user experience and increasing conversion rates.

The project involved extensive user research, competitive analysis, and iterative design processes to create an experience that delights users while driving business results.
    `,
    image: portfolio1,
    gallery: [portfolio1, portfolio2],
    client: "Fashion Retail Brand",
    duration: "5 months",
    year: "2023",
    role: "UX/UI Designer",
    tools: ["Figma", "Maze", "Hotjar", "Google Analytics"],
    challenges: [
      "High cart abandonment rates",
      "Complex product filtering system",
      "Mobile conversion lagging behind desktop",
    ],
    solutions: [
      "Streamlined checkout to 3 steps",
      "Redesigned filtering with progressive disclosure",
      "Mobile-first approach with thumb-friendly navigation",
    ],
    results: [
      "32% increase in mobile conversions",
      "45% reduction in cart abandonment",
      "28% increase in average order value",
    ],
    likes: 289,
    comments: [],
    featured: false,
  },
  {
    id: "4",
    slug: "branding-identity-techstart",
    title: "TechStart Branding Identity",
    category: "Branding",
    description:
      "Complete visual identity system for an innovative technology startup.",
    fullDescription: `
Creating a bold and memorable brand identity for TechStart, a cutting-edge technology company disrupting the fintech space.

The identity system encompasses logo design, color palette, typography, iconography, and comprehensive brand guidelines for consistent application across all touchpoints.
    `,
    image: portfolio2,
    gallery: [portfolio2, portfolio3],
    client: "TechStart Inc.",
    duration: "2 months",
    year: "2024",
    role: "Brand Designer",
    tools: ["Illustrator", "Figma", "After Effects"],
    challenges: [
      "Standing out in a crowded fintech market",
      "Balancing innovation with trustworthiness",
      "Creating flexible assets for digital and print",
    ],
    solutions: [
      "Developed a distinctive geometric logo system",
      "Created a dual color palette for different contexts",
      "Built a comprehensive motion design language",
    ],
    results: [
      "92% brand recognition in target demographic",
      "Featured in design publications",
      "Successful Series A with strong brand perception",
    ],
    likes: 198,
    comments: [],
    featured: true,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getRelatedProjects = (
  currentSlug: string,
  limit = 3
): Project[] => {
  return projects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, limit);
};
