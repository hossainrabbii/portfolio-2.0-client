"use client";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
}

interface CommentSectionProps {
  comments: Comment[];
  onAddComment?: (content: string) => void;
}

const CommentSection = ({
  comments: initialComments,
  onAddComment,
}: CommentSectionProps) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) {
      toast.error("Please write a comment first");
      return;
    }

    const comment: Comment = {
      id: `c-${Date.now()}`,
      author: {
        name: "Guest User",
        avatar: "/placeholder.svg",
      },
      content: newComment.trim(),
      createdAt: new Date().toISOString().split("T")[0],
      likes: 0,
    };

    setComments((prev) => [comment, ...prev]);
    setNewComment("");
    toast.success("Comment added successfully!");
    onAddComment?.(newComment);
  };

  const handleLikeComment = (commentId: string) => {
    const newLikedComments = new Set(likedComments);
    if (newLikedComments.has(commentId)) {
      newLikedComments.delete(commentId);
      setComments((prev) =>
        prev.map((c) =>
          c.id === commentId ? { ...c, likes: c.likes - 1 } : c,
        ),
      );
    } else {
      newLikedComments.add(commentId);
      setComments((prev) =>
        prev.map((c) =>
          c.id === commentId ? { ...c, likes: c.likes + 1 } : c,
        ),
      );
    }
    setLikedComments(newLikedComments);
  };

  return (
    <div className="space-y-8">
      {/* Comment Count */}
      <div className="flex items-center gap-3">
        <MessageCircle className="w-5 h-5 text-primary" />
        <h3 className="font-display text-xl font-semibold text-foreground">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <Avatar className="w-10 h-10 shrink-0">
            <AvatarImage src="/placeholder.svg" alt="Your avatar" />
            <AvatarFallback>GU</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-3">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="min-h-[100px] bg-secondary/50 border-border focus:border-primary resize-none"
            />
            <div className="flex justify-end">
              <Button type="submit" className="gap-2">
                <Send className="w-4 h-4" />
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 shrink-0">
                  <AvatarImage
                    src={comment.author.avatar}
                    alt={comment.author.name}
                  />
                  <AvatarFallback>
                    {comment.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-secondary/30 rounded-2xl rounded-tl-sm p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">
                        {comment.author.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {comment.createdAt}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 ml-2">
                    <button
                      onClick={() => handleLikeComment(comment.id)}
                      className={`flex items-center gap-1 text-sm transition-colors ${
                        likedComments.has(comment.id)
                          ? "text-red-500"
                          : "text-muted-foreground hover:text-red-500"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          likedComments.has(comment.id) ? "fill-current" : ""
                        }`}
                      />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
