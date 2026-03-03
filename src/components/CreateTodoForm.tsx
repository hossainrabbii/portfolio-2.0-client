"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { TodoFormValues, todoSchema } from "@/schema/todo.schema";
import { createToDo } from "@/services/ToDo";
import { toast } from "sonner";

export default function CreateTodoForm() {
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      description: "",
      time: "",
      priority: "medium",
      dueDate: undefined,
    },
  });

  const onSubmit = async (data: TodoFormValues) => {
    try {
      // If no date selected, don't send dueDate
      const payload = {
        ...data,
        ...(data.dueDate ? { dueDate: data.dueDate } : {}),
      };

      const response = await createToDo(payload);

      if (!response?.success) {
        toast.error(
          response?.message ||
            "Something went wrong, refresh the page, try again.",
        );
        return;
      }
      toast.success(response?.message || "Todo added.");
      //   await axios.post("http://localhost:5000/api/todos", payload);

      //   form.reset();

      //   alert("Todo created successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to create todo");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 border rounded-2xl shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter task title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Optional description" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Time */}
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time (optional)</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Date */}
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date (optional)</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? new Date(e.target.value) : undefined,
                      )
                    }
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Priority */}
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Create Todo
          </Button>
        </form>
      </Form>
    </div>
  );
}
