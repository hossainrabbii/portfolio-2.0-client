"use client";
import { motion } from "framer-motion";
import EmailForm from "@/components/EmailForm";

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Get In Touch
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Let's work
              <br />
              <span className="text-primary">together</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-md">
              Ready to bring your vision to life? Send me a message and let's
              create something amazing together.
            </p>

            <div className="flex flex-col gap-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg">📧</span>
                </div>
                <span>hello@portfolio.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg">📍</span>
                </div>
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="glass-card p-8 rounded-2xl">
            <EmailForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
