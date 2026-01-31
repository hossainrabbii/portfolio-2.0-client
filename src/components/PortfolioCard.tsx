"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const PortfolioCard = ({ projects }: any) => {
  return (
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
              <div className="aspect-[16/10] overflow-hidden inset-0 bg-gradient-to-br from-[#E1B505]/30 via-[#E1B505]/10 to-accent/20">
                <Image
                  src={project?.gallery[0]}
                  alt={project.title}
                  width={600}
                  height={100}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-[#E1B505] uppercase tracking-wider mb-2">
                      {project.category?.title}
                    </p>
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                      {project?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-[60px] px-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="w-12 h-12 rounded-full bg-[#E1B505]  flex items-center justify-center text-black foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 bg-[#E1B505]  text-black foreground text-xs font-medium px-3 py-1.5 rounded-full">
                  Featured
                </div>
              )}
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioCard;
