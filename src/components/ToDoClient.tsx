"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Edit, Minus } from "lucide-react";
import { deleteTodoService } from "@/services/ToDo";
import { toast } from "sonner";

interface ITodo {
  _id: string;
  title: string;
  description?: string;
  time?: string;
  dueDate?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

interface Props {
  initialTodos: ITodo[];
}

type FilterType = "all" | "active" | "done";

export default function TodoClient({ initialTodos }: Props) {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [filter, setFilter] = useState<FilterType>("all");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API;

  /* =========================
     ADD TODO (Instant UI)
  ========================== */
  const addTodo = (newTodo: ITodo) => {
    setTodos((prev) => [newTodo, ...prev]);
  };
  // 👆 Call this from your AddTodo form after successful POST

  /* =========================
     TOGGLE COMPLETE
  ========================== */
  const toggleComplete = async (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );

    await fetch(`${baseUrl}/todo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: !todos.find((t) => t._id === id)?.completed,
      }),
    });
  };

  /* =========================
     DELETE TODO
  ========================== */
  const deleteTodo = async (id: string) => {
    const response = await deleteTodoService(id);
    if (!response?.success) {
      toast.error(response?.message || "Something went wrong.");
      return;
    }
    toast.success(response?.message || "Deleted todo.");

    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  };

  /* =========================
     FILTER LOGIC
  ========================== */
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "done") return todo.completed;
    return true;
  });

  return (
    <div className="space-y-2">
      {/* ===== FILTER BUTTONS ===== */}
      <div className="flex gap-2 justify-start border-b pb-2">
        {["all", "active", "done"].map((f) => (
          <Button
            key={f}
            size="sm"
            variant={filter === f ? "default" : "outline"}
            onClick={() => setFilter(f as FilterType)}
          >
            {f.toUpperCase()}
          </Button>
        ))}
      </div>

      {/* ===== EMPTY STATE ===== */}
      {filteredTodos.length === 0 && (
        <p className="text-center text-muted-foreground">No todos found.</p>
      )}

      {/* ===== TODO LIST ===== */}
      {filteredTodos.map((todo) => (
        <Card
          key={todo._id}
          className={`transition-all ${
            todo.completed ? "bg-green-50 border-green-200" : ""
          }`}
        >
          <CardContent>
            {/* <div className=" gap-3 items-center"> */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleComplete(todo._id)}
                />
                <h3
                  className={`font-semibold ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.title}
                </h3>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Edit />
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deleteTodo(todo._id)}
                >
                  <Minus />
                </Button>
              </div>
            </div>

            {todo.description && (
              <p className="text-sm text-gray-600 py-2">{todo.description}</p>
            )}

            <div className="w-full flex gap-2 mt-1 text-xs justify-between">
              <Badge
                className={`text-white px-3 rounded-md ${
                  todo.priority === "high"
                    ? "bg-orange-500/50"
                    : todo.priority === "medium"
                      ? "bg-purple-500/50"
                      : "bg-gray-500/50"
                }`}
              >
                {todo.priority}
              </Badge>
              <div className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-1 text-sm">
                {/* Time */}
                <div className="inline-flex items-center gap-2 rounded-md bg-slate-100 text-sm">
                  {/* Time with AM/PM */}
                  {todo.time && (
                    <div className="font-medium text-slate-700">
                      {(() => {
                        const [hourStr, minute] = todo.time.split(":");
                        let hour = parseInt(hourStr, 10);
                        const period = hour >= 12 ? "PM" : "AM";
                        const hour12 = hour % 12 === 0 ? 12 : hour % 12;
                        return `${hour12.toString().padStart(2, "0")}:${minute} ${period}`;
                      })()}
                    </div>
                  )}

                  {/* Separator */}
                  {todo.time && todo.dueDate && (
                    <span className="text-slate-400">|</span>
                  )}

                  {/* Date */}
                  {todo.dueDate && (
                    <span className="text-slate-600">
                      {new Date(todo.dueDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
