"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer",
    company: "GroupValet",
    period: "2022 - Present",
    description:
      "Initially joined to fix responsive and layout issues across the entire website. After successfully improving UI consistency and cross-device experience, I was invited to join their remote team. Worked closely with designers and developers to enhance overall frontend quality. It was a great learning and collaboration experience.",
    current: false,
  },
  {
    title: "Frontend Developer",
    company: "Belto World",
    period: "2020 - 2022",
    description:
      "Worked on a contractual basis to design and develop a modern landing page for an AI-powered service provider company. Focused on clean UI, performance optimization, and clear product communication aligned with their AI-driven offerings.",
    current: false,
  },
  {
    title: "Web Developer",
    company: "UniTok",
    period: "2019 - 2020",
    description:
      "Built the complete landing page and dashboard for a professional service provider platform. One of the key challenges was working with Angular, which I learned and implemented during the project, delivering a functional and scalable frontend solution.",
    current: false,
  },
  {
    title: "Web Developer",
    company: "PrestigeVideo",
    period: "2019 - 2020",
    description:
      "Developed a WordPress website from scratch for a video service provider company. Handled layout structure, theme customization, and responsive design to deliver a professional and user-friendly web presence.",
    current: false,
  },
  {
    title: "Frontend Developer",
    company: "SellnChill",
    period: "2019 - 2020",
    description:
      "Worked on a contractual project to build the homepage for a hosting-focused company using Angular. The project provided strong hands-on experience with Angular and helped improve my understanding of component-based architecture and performance-focused UI development.",
    current: false,
  },
];
const education = [
  {
    title: "BSC in CSE",
    institution: "Dhaka City College",
    period: "2018 - 2023",
  },
  {
    title:
      "Freelance Focus: Upskilling for a Better Future (Government Training Program)",
    institution: "BACCO",
    period: "2025 - 2026",
  },

  {
    title: "Think in a Redux way",
    institution: "Learn With Sumit",
    period: "2022",
  },
  {
    title: "Complete Web Development",
    institution: "Programming Hero",
    period: "2021",
  },
  {
    title: "Responsive Web Design",
    institution: "Creative IT",
    period: "2020",
  },
];

const Experience = () => {
  return (
    <section className="py-24" id="experience">
      <div className="section-container container mx-auto px-4">
        {/* Section Header */}
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
              Experience
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Real-World Experience
            <br />
            <span className="text-[#E1B505]">Working With Clients</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-8 items-center">
          {/* Work Experience */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
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
                  {/* <div className="flex items-center gap-2">
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
                  </div> */}
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
                  key={index}
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
