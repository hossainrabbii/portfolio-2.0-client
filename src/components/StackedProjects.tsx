"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import Image from "next/image";

const projects = [
  {
    title: "M-Mockups MacBook Air",
    category: "UI/UX Design",
    date: "18 Aug, 2025",
    subtitle: "LuminUI",
    image: project1,
    link: "#",
  },
  {
    title: "Dashboard Analytics",
    category: "Web Design",
    date: "22 Sep, 2025",
    subtitle: "DataViz Pro",
    image: project2,
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    category: "Branding",
    date: "05 Oct, 2025",
    subtitle: "ShopFlow",
    image: portfolio1,
    link: "#",
  },
  {
    title: "Mobile App Design",
    category: "UI/UX Design",
    date: "15 Nov, 2025",
    subtitle: "AppSync",
    image: portfolio2,
    link: "#",
  },
];

const StackedProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section Header */}
        <div className="section-container pt-24">
          <div className="flex items-center justify-between mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-sm bg-primary" />
                ))}
              </div>
              <span className="text-foreground font-medium">
                Recent Projects
              </span>
            </motion.div>
            <motion.a
              href="#portfolio"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium"
            >
              Explore more Work
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Stacked Cards */}
        <div className="section-container relative h-[calc(100vh-200px)]">
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1;

            return (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                totalProjects={projects.length}
                scrollYProgress={scrollYProgress}
                isLast={isLast}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  totalProjects: number;
  scrollYProgress: any;
  isLast: boolean;
}

const ProjectCard = ({
  project,
  index,
  totalProjects,
  scrollYProgress,
  isLast,
}: ProjectCardProps) => {
  const cardStart = index / totalProjects;
  const cardEnd = (index + 1) / totalProjects;

  const y = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [index === 0 ? 0 : 100, isLast ? 50 : -100]
  );

  const scale = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [1, isLast ? 0.95 : 0.9]
  );

  const opacity = useTransform(
    scrollYProgress,
    [cardStart, cardEnd - 0.1, cardEnd],
    [1, 1, isLast ? 0.4 : 0]
  );

  const zIndex = totalProjects - index;

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex,
      }}
      className="absolute inset-x-0 top-0"
    >
      <div className="relative bg-card rounded-3xl overflow-hidden border border-border group cursor-pointer">
        {/* Diagonal Lines Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 10px,
                hsl(var(--foreground) / 0.1) 10px,
                hsl(var(--foreground) / 0.1) 11px
              )`,
            }}
          />
        </div>

        <div className="relative p-6 md:p-8">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Left - Image */}
            <div className="flex-1 relative">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* View Project Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium flex items-center gap-2 text-sm shadow-lg">
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right - Info */}
            <div className="flex-1 space-y-4">
              <h3 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground/20">
                {project.subtitle}
              </h3>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="flex items-center gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm">
              {project.category}
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm">
              {project.date}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StackedProjects;
