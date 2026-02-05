"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import groupValet from "@/assets/gb.png";
import UniTok from "@/assets/unitok.png";
import Prestige from "@/assets/Prestige.png";
import Profit4life from "@/assets/pfl.png";
import brandbuddy from "@/assets/Untitled-design.webp";
import Link from "next/link";
const clients = [
  { name: "GroupValet", logo: groupValet, url: "https://groupvalet.com/" },
  { name: "UniTok", logo: UniTok, url: "https://unitok.io/" },
  { name: "Prestige", logo: Prestige, url: "https://prestigevideo.fr/" },
  {
    name: "Profit4life",
    logo: Profit4life,
    url: "https://portal.profit4lifevnzla.com/",
  },
  { name: "brandbuddy", logo: brandbuddy, url: "https://brandbuddy.ca/" },
];

const Clients = () => {
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="section-container container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            Trusted by leading companies
          </span>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col justify-center items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer border-b pb-2"
            >
              <Image
                src={client.logo}
                alt={client?.name}
                width={50}
                height={50}
                className="w-[60px] h-[50] object-contain rounded-md"
              />
              <span className="font-display font-semibold text-xl">
                <Link href={client?.url}>{client.name}</Link>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
