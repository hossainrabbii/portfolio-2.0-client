"use client";
import { motion } from "framer-motion";

const clients = [
  { name: "Spotify", logo: "🎵" },
  { name: "Airbnb", logo: "🏠" },
  { name: "Dropbox", logo: "📦" },
  { name: "Slack", logo: "💬" },
  { name: "Notion", logo: "📝" },
  { name: "Linear", logo: "⚡" },
];

const Clients = () => {
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="section-container">
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

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <span className="text-2xl">{client.logo}</span>
              <span className="font-display font-semibold text-lg">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
