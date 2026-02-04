"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import bg from "@/assets/18653.jpg";
import heroImage from "@/assets/hossain.png";
import Image from "next/image";

const tags = ["#FULL STACK DEVELOPER", "#MERN", "#NextJS", "#WordPress"];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 container mx-auto px-4 text-center">
        {/* Big Animated Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-12 pb-8"
        >
          <h1 className="font-display text-[10vw] md:text-[10vw] lg:text-[8vw] font-bold tracking-tight leading-none">
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
              HOSSAIN
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
              RABBI
            </motion.span>
          </h1>
        </motion.div>
        <div className="text-[#E1B505] font-semibold my-2 text-2xl">
          Helping startups & businesses create high-performance websites
        </div>
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
              className="text-muted-foreground text-md md:text-xl font-bold tracking-wider"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-center text-left">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center"
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
                  alt="Hossain Rabbi"
                  className="w-full h-full object-cover grayscale"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <div className="">
            <div className="mb-2">
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card border border-border rounded-xl p-6 grid grid-cols-3 gap-4"
              >
                {[
                  { value: "8", label: "Years in tech industry" },
                  { value: "100+", label: "Projects" },
                  { value: "50+", label: "Clients" },
                ].map((stat, index) => (
                  <div key={index} className="text-left">
                    <p className="text-2xl font-display font-bold text-[#E1B505]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 pb-8"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                I’m a passionate Web Developer who loves turning ideas into
                functional, dynamic websites. Since 2017, I’ve been helping
                clients worldwide bring their visions to life — delivering
                clean, responsive, and high-performing web applications through
                Fiverr and Upwork.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Over the years, I’ve successfully completed 100+ freelance
                projects, earning tons of 5-star reviews and long-term client
                relationships by staying committed to quality, clarity, and
                deadlines.
              </p>
              {/* 
              <Button className="bg-primary text-[#E1B505] foreground hover:bg-primary/90 font-medium px-8 py-6 text-base group rounded-full">
                Start a Project Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button className="bg-primary text-[#E1B505] foreground hover:bg-primary/90 font-medium group">
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
