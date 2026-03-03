"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "./ui/checkbox";

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

export default function TodoClient({ initialTodos }: Props) {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API;

  // Toggle Complete (Optimistic Update)
  const toggleComplete = async (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo._id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );

    await fetch(`${baseUrl}/todo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: !todos.find((t) => t._id === id)?.completed,
      }),
    });
  };

  // Delete Todo
  const deleteTodo = async (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo._id !== id));

    await fetch(`${baseUrl}/todo/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="space-y-4">
      {todos.length === 0 && (
        <p className="text-center text-muted-foreground">
          No todos found.
        </p>
      )}

      {todos.map((todo) => (
        <Card
          key={todo._id}
          className={`transition-all ${
            todo.completed ? "bg-green-50 border-green-300" : ""
          }`}
        >
          <CardContent className="flex justify-between items-start p-4">
            <div className="flex gap-3 items-start">
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
                  <p className="text-sm text-gray-600">
                    {todo.description}
                  </p>
                )}

                <div className="flex gap-2 mt-2 text-xs text-gray-500">
                  {todo.time && <span>⏰ {todo.time}</span>}
                  {todo.dueDate && (
                    <span>
                      📅 {new Date(todo.dueDate).toLocaleDateString()}
                    </span>
                  )}
                </div>

                <Badge
                  className={`mt-2 ${
                    todo.priority === "high"
                      ? "bg-red-500"
                      : todo.priority === "medium"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                >
                  {todo.priority}
                </Badge>
              </div>
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                Edit
              </Button>

              <Button
                size="sm"
                variant="destructive"
                onClick={() => deleteTodo(todo._id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}