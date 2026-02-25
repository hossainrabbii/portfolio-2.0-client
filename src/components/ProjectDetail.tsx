"use client";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  ExternalLink,
  GitBranchPlus,
  Quote,
} from "lucide-react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";
import SocialShare from "@/components/SocialShare";
import CommentSection from "@/components/CommentSection";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IProject } from "@/types/IProject";
type slugProps = {};

type ProjectDetailProps = {
  project: IProject;
  slug: string;
};
const ProjectDetail = ({ project, slug }: ProjectDetailProps) => {
  const navigate = useRouter();
  // const projectContent = slug ? getProjectBySlug(slug) : undefined;
  // const relatedProjects = slug ? getRelatedProjects(slug) : [];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center container mx-auto px-4">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Link href="/#portfolio" className="text-[#E1B505] hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="section-container container mx-auto px-4">
          {/* Back Button */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </motion.div> */}

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Info */}
            <div>
              {/* Category */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-block bg-[#E1B505] text-black foreground text-sm font-medium px-4 py-1.5 rounded-full">
                  {project?.category?.title}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
              >
                {project.title}
              </motion.h1>

              {/* FUll Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-8"
              >
                {project?.fullDescription}
              </motion.p>

              {/* Project Meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 gap-6 mb-8"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-medium text-foreground">
                    {project.client}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Year</p>
                  <p className="font-medium text-foreground">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="font-medium text-foreground">
                    {project.duration}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Role</p>
                  <p className="font-medium text-foreground">{project.role}</p>
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <p className="text-sm text-muted-foreground mb-3">
                  Techs & Tools Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {project?.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-secondary text-muted-foreground text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-4"
              >
                {project.github && (
                  <Button asChild className="gap-2 bg-[#E1B505] text-black">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitBranchPlus className="w-4 h-4" />
                      View Github
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild className="gap-2 bg-[#E1B505] text-black">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Project
                    </a>
                  </Button>
                )}
                <LikeButton initialLikes={project.likes} />
              </motion.div>
            </div>

            {/* Right - Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[5/3] rounded-2xl overflow-hidden bg-card border border-border inset-0 bg-gradient-to-br from-[#E1B505]/30 via-[#E1B505]/10 to-accent/20">
                <Image
                  src={project.gallery[0]}
                  width={500}
                  height={500}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Share Bar */}
      <section className="py-8">
        <div className="section-container container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-card rounded-2xl border border-border"
          >
            <p className="text-muted-foreground">
              Share this project with others
            </p>
            <SocialShare
              url={currentUrl}
              title={project.title}
              description={project.description}
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="py-16">
          <div className="section-container container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-bold text-foreground mb-8"
            >
              Project Gallery
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-[18/10] rounded-2xl overflow-hidden bg-card border border-border inset-0 bg-gradient-to-br from-[#E1B505]/30 via-[#E1B505]/10 to-accent/20"
                >
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-16 bg-secondary/20">
        <div className="section-container container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                Challenges
              </h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="text-[#E1B505]">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#E1B505]" />
                Solutions
              </h3>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="text-[#E1B505]">•</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                Results
              </h3>
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="text-[#E1B505]">•</span>
                    {result}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-24">
          <div className="section-container max-w-4xl container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-card rounded-3xl p-8 md:p-12 border border-border"
            >
              <Quote className="w-12 h-12 text-[#E1B505]/30 mb-6" />
              <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-medium text-[#E1B505]">
                    {project.testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {project.testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {project.testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Comments */}
      <section className="py-16 bg-secondary/20">
        <div className="section-container max-w-4xl container mx-auto px-4">
          <CommentSection comments={project.comments} />
        </div>
      </section>

      {/* Related Projects */}
      {/* {relatedProjects.length > 0 && (
        <section className="py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">
                More Projects
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/project/${relatedProject.slug}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <Image
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-xs text-[#E1B505] mb-2">
                          {relatedProject.category}
                        </p>
                        <h3 className="font-display font-semibold text-foreground group-hover:text-[#E1B505] transition-colors">
                          {relatedProject.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )} */}

      <Footer />
    </div>
  );
};

export default ProjectDetail;
