"use client"
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "My design process involves research, ideation, wireframing, prototyping, testing, and iteration. I collaborate closely with clients at each stage to ensure the final product meets their goals and user needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website redesign might take 2-4 weeks, while a comprehensive product design project could take 2-3 months. I provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you work with startups or established companies?",
    answer:
      "I work with both! I've helped early-stage startups establish their visual identity and also assisted established companies in refreshing their digital presence. Each engagement is tailored to the specific needs and budget of the client.",
  },
  {
    question: "What tools do you use for design?",
    answer:
      "I primarily use Figma for UI/UX design, along with Adobe Creative Suite for branding work. For prototyping and animation, I use tools like Principle and Framer. I stay current with the latest design tools to deliver the best results.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes! I offer maintenance packages and ongoing support for clients who need it. This includes design iterations, new feature designs, and consultation as your product evolves.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="section-container">
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
              Answers to common questions about my design services and process.
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
