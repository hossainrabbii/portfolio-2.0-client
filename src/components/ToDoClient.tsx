"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Edit, Minus } from "lucide-react";

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
    setTodos((prev) => prev.filter((todo) => todo._id !== id));

    await fetch(`${baseUrl}/todo/${id}`, {
      method: "DELETE",
    });
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
          <CardContent className="flex justify-between items-start">
            <div className="flex gap-3 items-center">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleComplete(todo._id)}
              />

              <div>
                <h3
                  className={`font-semibold ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.title}
                </h3>

                {todo.description && (
                  <p className="text-sm text-gray-600">{todo.description}</p>
                )}

                <div className="flex gap-2 mt-1 text-xs text-gray-500">
                  <Badge
                    className={`text-white ${
                      todo.priority === "high"
                        ? "bg-red-500"
                        : todo.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                    }`}
                  >
                    {todo.priority}
                  </Badge>

                  {todo.time && <span>⏰ {todo.time}</span>}
                  {todo.dueDate && (
                    <span>
                      📅 {new Date(todo.dueDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
