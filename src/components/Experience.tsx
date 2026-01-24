"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "UI/UX Designer",
    company: "Acme Corp",
    period: "2022 - Present",
    description: "Leading design initiatives for enterprise SaaS products.",
    current: true,
  },
  {
    title: "Product Designer",
    company: "TechFlow Inc",
    period: "2020 - 2022",
    description: "Designed and shipped 15+ features for mobile applications.",
    current: false,
  },
  {
    title: "Senior UI Designer",
    company: "DesignHub",
    period: "2019 - 2020",
    description: "Created design systems for multiple client projects.",
    current: false,
  },
];

const education = [
  {
    title: "BSC in CSE",
    institution: "MIT University",
    period: "2015 - 2019",
  },
  {
    title: "Diploma in Web Design",
    institution: "Design Academy",
    period: "2018 - 2019",
  },
  {
    title: "UI/UX Certification",
    institution: "Google",
    period: "2019",
  },
  {
    title: "Branding Course",
    institution: "Coursera",
    period: "2020",
  },
];

const Experience = () => {
  return (
    <section className="py-24">
      <div className="section-container container mx-auto px-4">
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
            Experience
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative pl-8 pb-8 border-l-2 border-border last:pb-0 hover:border-primary transition-colors"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-2 top-0 w-3.5 h-3.5 rounded-full border-2 ${
                    exp.current
                      ? "bg-primary border-primary"
                      : "bg-background border-border group-hover:border-primary"
                  } transition-colors`}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-[#E1B505] text-sm font-medium">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {exp.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-semibold text-xl text-foreground mb-6"
            >
              Education & Certifications
            </motion.h3>

            <div className="grid gap-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground text-sm">
                        {edu.title}
                      </h4>
                      <p className="text-muted-foreground text-xs mt-1">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
