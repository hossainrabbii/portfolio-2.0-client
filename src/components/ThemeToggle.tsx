import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-[40px]">
      <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
    </div>
  );
};

export default ThemeToggle;
