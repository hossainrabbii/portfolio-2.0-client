"use client";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import heroImage from "@/assets/hossain.png";
import logoImage from "@/assets/hossainlogo.png";
import Image from "next/image";
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import EmailForm from "./EmailForm";
import SocialMedia from "./SocialMedia";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto section-container px-4">
          <div className="flex items-center justify-between h-12 md:h-20">
            {/* Logo */}
            <motion.a
              href="/#home"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-md flex items-center justify-center">
                  <span className="text-[#E1B505] foreground font-display font-bold text-lg">
                    <Image
                      src={logoImage}
                      alt="Hossain"
                      width={35}
                      height={35}
                      className="oveject-cover rounded-full border border-[#e1b505]"
                    ></Image>
                  </span>
                </div>
                <span className="font-display font-semibold text-md text-foreground">
                  {/* Hossain <br /> */}
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={`/${item.href}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium accent-underline"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button + Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="hidden lg:flex items-center gap-3"
            >
              <ThemeToggle />
              <Button
                onClick={() => {
                  setIsOpen(false);
                  setIsHireModalOpen(true);
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium "
              >
                Hire Me
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}

            <div className="lg:hidden flex gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" text-foreground p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    setIsHireModalOpen(true);
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium w-full"
                >
                  Hire Me
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <Dialog open={isHireModalOpen} onOpenChange={setIsHireModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              Let's Work Together
            </DialogTitle>
            <h4>Connect with me on social platforms.</h4>
            <div className="my-4">
              <SocialMedia />
            </div>
            <DialogDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </DialogDescription>
          </DialogHeader>
          <EmailForm onSuccess={() => setIsHireModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
