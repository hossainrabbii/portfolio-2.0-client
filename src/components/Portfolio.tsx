"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";

const Portfolio = ({ projects }: any) => {
  // console.log(projects);
  return (
    <section id="portfolio" className="py-24">
      <div className="section-container container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Selected Works
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Showcasing My Work for
              <br />
              <span className="text-primary">Your Inspiration</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore All Projects
            </Button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project: any, index: number) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={project?.gallery[0]}
                      alt={project.title}
                      width={600}
                      height={100}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-primary uppercase tracking-wider mb-2">
                          {project.category}
                        </p>
                        <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.description}
                        </p>
                      </div>
                      <div className="w-[60px] px-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 45 }}
                          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                      </div>
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
