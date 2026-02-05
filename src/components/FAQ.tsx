"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What information do you need to start a project?",
    answer:
      "I need a clear project brief, goals, reference websites (if any), content, and access credentials once the project is confirmed.",
  },
  {
    question: "Do you provide responsive and mobile-friendly designs?",
    answer:
      "Yes. Every website I build is fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "Can you work with existing websites or code?",
    answer:
      "Absolutely. I can redesign, fix bugs, improve performance, or extend features in existing websites or applications.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on scope and complexity, but most small to medium projects are completed within a few days to a couple of weeks.",
  },
  {
    question: "Do you offer revisions after delivery?",
    answer:
      "Yes. I include revisions to ensure the final result matches your expectations and requirements.",
  },
  {
    question: "Will my website be SEO and performance optimized?",
    answer:
      "Yes. I follow SEO-friendly practices and optimize for speed, Core Web Vitals, and overall performance.",
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Yes. I offer post-delivery support and can assist with updates, fixes, or future improvements..",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="section-container container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Support
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              FAQs
            </h2>

            <p className="text-muted-foreground max-w-md mx-auto">
              Answers to common questions about my development and process.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="hover:no-underline py-6 text-left">
                    <span className="font-display font-medium text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
