"use client";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Code,
  Layers,
  PenTool,
  Smartphone,
  Database,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const services = [
  {
    id: "1",
    icon: Layers,
    title: "Full Stack Development",
    description:
      "End-to-end web application development, handling everything from frontend interfaces to secure, scalable backend systems.",
    features: [
      "Frontend & Backend Architecture",
      "REST & API Development",
      "Database Design & Management",
      "Deployment & Maintenance",
    ],
  },
  {
    id: "2",
    icon: Code,
    title: "Frontend Development",
    description:
      "Building fast, responsive, and user-friendly interfaces using modern frontend technologies and best practices.",
    features: [
      "React & Next.js",
      "TypeScript & JavaScript",
      "Tailwind CSS & UI Styling",
      "Performance Optimization",
    ],
  },
  {
    id: "3",
    icon: Database,
    title: "Backend Development",
    description:
      "Creating robust backend systems that power your applications with security, scalability, and efficiency.",
    features: [
      "Node.js & Express",
      "Database Design (SQL & NoSQL)",
      "Authentication & Authorization",
      "API & Server Optimization",
    ],
  },
  {
    id: "4",
    icon: PenTool,
    title: "WordPress CMS",
    description:
      "Custom WordPress solutions tailored to your business, from landing pages to full-featured dynamic websites.",
    features: [
      "Theme Customization",
      "Elementor & Custom Blocks",
      "Speed & SEO Optimization",
      "Bug Fixes & Maintenance",
    ],
  },
  {
    id: "5",
    icon: Smartphone,
    title: "AI Code Evaluation",
    description:
      "Reviewing, improving, and optimizing AI-generated or existing code to ensure quality, performance, and scalability.",
    features: [
      "AI Code Review & Refactoring",
      "Performance & Security Checks",
      "Best Practices Enforcement",
      "Scalability Improvements",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="section-container container mx-auto px-4">
        <div className="mx-auto items-center max-w-4xl">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                My Services
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Experience the Impact of
              <br />
              <span className="text-[#E1B505]">User-Centered Design</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed ">
              I offer comprehensive design services tailored to your unique
              needs, helping businesses create exceptional web apps.
            </p>

            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-[#E1B505] font-medium"
            >
              {/* <Link href="/#contact">Get a Free Consultation</Link> */}

              {/* <ChevronRight className="w-4 h-4" /> */}
            </motion.a>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={service.id}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-[#E1B505]" />
                        </div>
                        <span className="font-display font-semibold text-foreground text-left text-[18px]">
                          {service.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground text-sm mb-4 pl-16">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pl-16">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
