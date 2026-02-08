import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { sendMail } from "@/services/SendMail";

const emailSchema = z.object({
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters"),
  mailId: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  body: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
});

interface EmailFormProps {
  onSuccess?: () => void;
  className?: string;
}

const EmailForm = ({ onSuccess, className = "" }: EmailFormProps) => {
  // const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    mailId: "",
    body: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // console.log(formData);
    const response = await sendMail(formData);
    if (!response?.success) {
      toast.error("Something went wrong.");
    } else {
      toast.success(response?.message || "Message sent successfully.");
    }
    console.log(response);
    // const result = emailSchema.safeParse(formData);
    //  if (!result.success) {
    //    const fieldErrors: Record<string, string> = {};
    //    result.error.errors.forEach((err) => {
    //      if (err.path[0]) {
    //        fieldErrors[err.path[0] as string] = err.message;
    //      }
    //    });
    //    setErrors(fieldErrors);
    //    return;
    //  }

    // setIsSubmitting(true);

    // Simulate email sending
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormData({ subject: "", mailId: "", body: "" });
    setIsSubmitting(false);
    onSuccess?.();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
    >
      <div className="space-y-2">
        <Label
          htmlFor="mailId"
          className="text-foreground flex items-center gap-2"
        >
          <Mail className="w-4 h-4 text-primary" />
          Your Email
        </Label>
        <Input
          id="mailId"
          name="mailId"
          type="email"
          placeholder="your@email.com"
          value={formData.mailId}
          onChange={handleChange}
          className="bg-background/50 border-border/50 focus:border-primary transition-colors"
          required
        />
        {errors.mailId && (
          <p className="text-sm text-destructive">{errors.mailId}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="subject"
          className="text-foreground flex items-center gap-2"
        >
          <FileText className="w-4 h-4 text-primary" />
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="Project inquiry..."
          value={formData.subject}
          onChange={handleChange}
          className="bg-background/50 border-border/50 focus:border-primary transition-colors"
          required
        />
        {errors.subject && (
          <p className="text-sm text-destructive">{errors.subject}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="body"
          className="text-foreground flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4 text-primary" />
          Message
        </Label>
        <Textarea
          id="body"
          name="body"
          placeholder="Tell me about your project..."
          value={formData.body}
          onChange={handleChange}
          rows={10}
          className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
          required
        />
        {errors.body && (
          <p className="text-sm text-destructive">{errors.body}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-6 text-base group"
      >
        {isSubmitting ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
          />
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </motion.form>
  );
};

export default EmailForm;
