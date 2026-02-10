"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import { projects } from "@/data/projectData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { IProject } from "@/types/IProject";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const AllProjects = ({ projects }: any) => {
  const [activeCategory, setActiveCategory] = useState("All");
  console.log(projects);
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p: any) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
              All <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A curated collection of my design and development work — each
              project represents a unique challenge solved with creativity and
              precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      {/* <section className="pb-8">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <Filter className="w-4 h-4 text-muted-foreground" />
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="section-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project: any, index: number) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors h-full"
                    >
                      {/* Image */}
                      <div className="aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.gallery[0]}
                          alt={project.title}
                          height={100}
                          width={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1.5">
                            {/* <p className="text-xs text-primary uppercase tracking-wider font-medium">
                              {project.category}
                            </p> */}
                            <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {project.tools.slice(0, 3).map((tool: any) => (
                            <span
                              key={tool}
                              className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                          {project.tools.length > 3 && (
                            <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                              +{project.tools.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                          Featured
                        </div>
                      )}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllProjects;
