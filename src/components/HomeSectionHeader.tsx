"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IHeaders } from "@/types/headersInterface";

const HomeSectionHeader = ({
  latest,
  boldFontTop,
  boldFontBottom,
  viewText,
  link,
}: IHeaders) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#E1B505]" />
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            {latest}
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          {boldFontTop}
          <br />
          <span className="text-[#E1B505]">{boldFontBottom}</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link
          href={`/${link}`}
          className="inline-flex items-center gap-2 bg-[#E1B505] text-black foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          {viewText}
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
};

export default HomeSectionHeader;
