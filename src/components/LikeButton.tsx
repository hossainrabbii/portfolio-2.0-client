"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

interface LikeButtonProps {
  initialLikes: number;
  size?: "sm" | "md" | "lg";
}

const LikeButton = ({ initialLikes, size = "md" }: LikeButtonProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex items-center gap-2">
      <motion.button
        onClick={handleLike}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-colors ${
          liked
            ? "bg-red-500/20 text-red-500"
            : "bg-secondary text-muted-foreground hover:bg-red-500/10 hover:text-red-500"
        }`}
      >
        <motion.div
          animate={liked ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Heart
            className={`${iconSizes[size]} ${liked ? "fill-current" : ""}`}
          />
        </motion.div>
      </motion.button>
      <span className="text-sm font-medium text-muted-foreground">
        {likes.toLocaleString()}
      </span>
    </div>
  );
};

export default LikeButton;
