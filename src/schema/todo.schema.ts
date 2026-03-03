import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  time: z.string().optional(),
  dueDate: z.date().optional(),
  priority: z.enum(["low", "medium", "high"]),
});

export type TodoFormValues = z.infer<typeof todoSchema>;