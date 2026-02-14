"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import heroImage from "@/assets/hossain.png";
import logoImage from "@/assets/hossainlogo.png";
import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";
import fiverr from "@/assets/fiverr.png";
import upwork from "@/assets/upwork.png";
import Image from "next/image";
import SocialMedia from "./SocialMedia";

const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { icon: github, href: "https://github.com/hossainrabbii", label: "GitHub" },
    {
      icon: linkedin,
      href: "https://linkedin.com/in/hossainrabbii/",
      label: "LinkedIn",
    },
    { icon: fiverr, href: "https://www.fiverr.com/iibbar", label: "Fiverr" },
    {
      icon: upwork,
      href: "https://upwork.com/freelancers/hossainrabbi",
      label: "UpWork",
    },
  ],
};
const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="section-container container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-md  flex items-center justify-center">
                <span className="text-[#E1B505] foreground font-display font-bold text-lg">
                  <Image
                    src={logoImage}
                    alt="Hossain"
                    width={35}
                    height={35}
                    className="oveject-cover rounded-md border border-[#e1b505]"
                  ></Image>
                </span>
              </div>
              <span className="font-display font-semibold text-lg text-foreground">
                Hossain Rabbi
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Creating exceptional digital experiences through innovative web
              application
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                mdhosen21018@gmail.com
              </p>
              <p className="text-muted-foreground text-sm">016419949627</p>
              <SocialMedia />
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Hossain Rabbi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
