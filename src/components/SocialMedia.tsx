"use client";
import { motion } from "framer-motion";
import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";
import fiverr from "@/assets/fiverr.png";
import upwork from "@/assets/upwork.png";
import wa from "@/assets/wa.png";
import Image from "next/image";
const SocialMedia = () => {
  const footerLinks = {
    social: [
      {
        icon: github,
        href: "https://github.com/hossainrabbii",
        label: "GitHub",
      },
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
      },{
        icon: wa,
        href: "call:01641994962",
        label: "WhatsApp",
      },
    ],
  };

  return (
    <div className="flex items-center gap-3 pt-2">
      {footerLinks.social.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          whileHover={{ scale: 1.1, y: -2 }}
          className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white transition-colors"
          aria-label={social.label}
        >
          <Image
            src={social?.icon}
            alt={social?.label}
            height={10}
            width={15}
            className="w-[20px]"
            title={social?.label}
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMedia;
