"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-profile.png";
import Image from "next/image";

const tags = ["#BRANDING", "#UI/UX DESIGN", "#DEVELOPMENT", "#WEB DESIGN"];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Big Animated Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-12 pb-8"
        >
          <h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold tracking-tight leading-none">
            <motion.span
              className="inline-block animated-gradient-text"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              DAVID
            </motion.span>
            <span className="mx-4 md:mx-8" />
            <motion.span
              className="inline-block animated-gradient-text"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              MICHEL
            </motion.span>
          </h1>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16"
        >
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-muted-foreground text-sm md:text-base font-medium tracking-wider"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Dotted Pattern */}
              <div className="absolute -top-4 -right-4 w-32 h-32 opacity-20">
                <div className="grid grid-cols-8 gap-1">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-foreground"
                    />
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden relative">
                <Image
                  src={heroImage}
                  alt="David Michel"
                  className="w-full h-full object-cover grayscale"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6 pb-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Welcome to my portfolio! I'm David Michel, a web designer &
              developer from the US with 16+ years of experience. I craft
              visually stunning, functional websites that deliver exceptional
              user experiences.
            </p>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-6 text-base group rounded-full">
              Start a Project Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
