"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-profile.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={aboutImage}
                alt="About David Michel"
                className="w-full aspect-[4/5] object-cover"
                width={500}
                height={500}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 left-8 right-8 bg-card border border-border rounded-xl p-6 grid grid-cols-3 gap-4"
            >
              {[
                { value: "5+", label: "Years Exp." },
                { value: "200+", label: "Projects" },
                { value: "50+", label: "Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-display font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div className="space-y-8 lg:pl-8">
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
                  About Me
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Passionate & Lead
                <br />
                <span className="text-primary">Product Designer</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed"
            >
              I'm a passionate product designer with over 5 years of experience
              creating digital experiences that users love. I specialize in
              UI/UX design, branding, and creating design systems that scale.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed"
            >
              My approach combines user research, strategic thinking, and
              creative execution to deliver products that not only look
              beautiful but also solve real problems for real people.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium group">
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

export default About;
