export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  coverImage: string;
  publishedAt: string;
  readTime: string;
  likes: number;
  comments: Comment[];
  tags: string[];
}

export interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-product-design-2024",
    title: "The Future of Product Design in 2024",
    excerpt: "Exploring emerging trends, tools, and methodologies shaping the next generation of digital product experiences.",
    content: `
## Introduction

The landscape of product design is evolving at an unprecedented pace. As we step into 2024, designers are embracing new tools, methodologies, and paradigms that are fundamentally changing how we approach digital experiences.

## AI-Powered Design Tools

Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the design workflow. From generative UI components to automated accessibility checks, AI tools are helping designers work faster and more efficiently.

### Key AI Tools Transforming Design

- **Generative Design Systems**: Tools that can create entire component libraries based on brand guidelines
- **Predictive User Flows**: AI that anticipates user behavior and suggests optimal navigation patterns
- **Automated Testing**: Machine learning algorithms that identify usability issues before launch

## The Rise of Spatial Computing

With the advent of Apple Vision Pro and similar devices, spatial computing is opening new frontiers for product designers. The traditional 2D canvas is expanding into three-dimensional space.

## Sustainable Design Practices

Environmental consciousness is becoming a core consideration in product design. From reducing digital carbon footprints to designing for longevity, sustainability is no longer optional.

## Conclusion

The future of product design is exciting, challenging, and full of opportunities. By embracing these trends while staying grounded in fundamental design principles, we can create products that are not just beautiful and functional, but also ethical and sustainable.
    `,
    category: "Design Trends",
    author: {
      name: "David Michel",
      avatar: "/placeholder.svg",
      role: "Product Designer",
    },
    coverImage: "/placeholder.svg",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    likes: 234,
    comments: [
      {
        id: "c1",
        author: { name: "Sarah Chen", avatar: "/placeholder.svg" },
        content: "Fantastic insights! The section on AI-powered design tools really resonated with me.",
        createdAt: "2024-01-16",
        likes: 12,
      },
      {
        id: "c2",
        author: { name: "Marcus Johnson", avatar: "/placeholder.svg" },
        content: "I'd love to see more on sustainable design practices. Great article!",
        createdAt: "2024-01-17",
        likes: 8,
      },
    ],
    tags: ["Design", "AI", "Trends", "2024"],
  },
  {
    id: "2",
    slug: "mastering-design-systems",
    title: "Mastering Design Systems at Scale",
    excerpt: "A comprehensive guide to building, maintaining, and scaling design systems for large organizations.",
    content: `
## Why Design Systems Matter

In today's fast-paced digital landscape, consistency and efficiency are paramount. Design systems provide the foundation for creating cohesive user experiences across products and platforms.

## Building Your Foundation

A successful design system starts with solid foundations. This includes defining your design tokens, establishing component architecture, and creating clear documentation.

### Core Components

1. **Design Tokens**: The atomic units of your visual language
2. **Component Library**: Reusable UI elements
3. **Pattern Library**: Common interaction patterns
4. **Documentation**: Guidelines and usage examples

## Governance and Maintenance

The key to a successful design system is ongoing maintenance. Establish clear governance processes and regular review cycles.

## Scaling Across Teams

As your organization grows, your design system must evolve. Create contribution guidelines and establish feedback loops with product teams.
    `,
    category: "Design Systems",
    author: {
      name: "David Michel",
      avatar: "/placeholder.svg",
      role: "Product Designer",
    },
    coverImage: "/placeholder.svg",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    likes: 189,
    comments: [
      {
        id: "c3",
        author: { name: "Emily Watson", avatar: "/placeholder.svg" },
        content: "This is exactly what our team needed. Implementing these practices now!",
        createdAt: "2024-01-11",
        likes: 15,
      },
    ],
    tags: ["Design Systems", "Scalability", "UI/UX"],
  },
  {
    id: "3",
    slug: "psychology-of-user-experience",
    title: "The Psychology Behind Great UX",
    excerpt: "Understanding cognitive principles that drive user behavior and create memorable digital experiences.",
    content: `
## Understanding User Psychology

Great design isn't just about aesthetics—it's about understanding how people think, feel, and behave.

## Cognitive Load Theory

Users have limited mental resources. By reducing cognitive load, we can create interfaces that feel effortless and intuitive.

## The Power of Emotion

Emotional design creates lasting connections. Learn how to evoke the right emotions at the right moments.

## Behavioral Design Patterns

Leverage established psychological principles to guide user behavior ethically and effectively.
    `,
    category: "UX Psychology",
    author: {
      name: "David Michel",
      avatar: "/placeholder.svg",
      role: "Product Designer",
    },
    coverImage: "/placeholder.svg",
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    likes: 312,
    comments: [],
    tags: ["Psychology", "UX", "Behavior"],
  },
  {
    id: "4",
    slug: "mobile-first-design-strategies",
    title: "Mobile-First Design Strategies That Work",
    excerpt: "Practical approaches to designing for mobile devices without compromising desktop experiences.",
    content: `
## The Mobile Reality

With over 60% of web traffic coming from mobile devices, mobile-first isn't just a strategy—it's a necessity.

## Core Principles

Learn the fundamental principles that make mobile-first design successful.

## Progressive Enhancement

Start with a solid mobile foundation and progressively enhance for larger screens.

## Touch-First Interactions

Design for fingers, not cursors. Understanding touch targets and gesture patterns.
    `,
    category: "Mobile Design",
    author: {
      name: "David Michel",
      avatar: "/placeholder.svg",
      role: "Product Designer",
    },
    coverImage: "/placeholder.svg",
    publishedAt: "2024-01-01",
    readTime: "6 min read",
    likes: 156,
    comments: [
      {
        id: "c4",
        author: { name: "Alex Rivera", avatar: "/placeholder.svg" },
        content: "The section on touch targets was incredibly helpful. Applied it immediately!",
        createdAt: "2024-01-02",
        likes: 7,
      },
    ],
    tags: ["Mobile", "Responsive", "UX"],
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, limit = 3): BlogPost[] => {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);
};
