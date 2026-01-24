"use client";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Palette,
  Code,
  Layers,
  PenTool,
  Smartphone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: "uiux",
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually stunning interfaces that enhance user experience and drive engagement.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    id: "webdev",
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive, performant websites and web applications using modern technologies.",
    features: [
      "React/Next.js",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
    ],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding",
    description:
      "Developing cohesive brand identities that communicate your values and resonate with your audience.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Strategy",
    ],
  },
  {
    id: "animation",
    icon: PenTool,
    title: "Animation Design",
    description:
      "Bringing interfaces to life with meaningful motion design that guides and delights users.",
    features: [
      "Micro-interactions",
      "Motion Graphics",
      "Loading States",
      "Transitions",
    ],
  },
  {
    id: "product",
    icon: Smartphone,
    title: "Product Design",
    description:
      "End-to-end product design from concept to launch, ensuring a seamless user journey.",
    features: [
      "Product Strategy",
      "Design Systems",
      "MVP Development",
      "Iteration",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="section-container container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
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

            <p className="text-muted-foreground leading-relaxed max-w-md">
              I offer comprehensive design services tailored to your unique
              needs, helping businesses create exceptional digital products.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-[#E1B505] font-medium"
            >
              Get a Free Consultation
              <ChevronRight className="w-4 h-4" />
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
                        <span className="font-display font-semibold text-foreground text-left">
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
