"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import Image from "next/image";

const projects = [
  {
    title: "M-Mockups MacBook Air",
    category: "UI Design",
    image: project1,
    link: "#",
  },
  {
    title: "LuminUI",
    category: "Design System",
    image: project2,
    link: "#",
  },
];

const FeaturedProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            Featured Projects
          </span>
        </motion.div>

        {/* Overlapping Cards */}
        <div className="relative h-[600px] md:h-[500px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              style={{ y: index === 0 ? y1 : y2 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`absolute ${
                index === 0
                  ? "left-0 top-0 md:left-0 z-10"
                  : "right-0 top-20 md:top-10 md:right-0 z-20"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: index === 0 ? -1 : 1 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors w-[320px] md:w-[450px]"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-[#E1B505]  flex items-center justify-center text-[#E1B505] foreground"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* View Project Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-[#E1B505]  text-[#E1B505] foreground text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  View Project
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
