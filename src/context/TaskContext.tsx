import { useState } from "react";
import type { FC, PropsWithChildren } from "react";
import type { Task } from "../types/task";
import { TaskContext } from "./taskContext.types";

// Начальные тестовые данные
const initialTasks: Task[] = [
  {
    id: "1",
    title: "Implement authentication",
    description: "Add user authentication using JWT tokens",
    category: "Feature",
    status: "In Progress",
    priority: "High",
  },
  {
    id: "2",
    title: "Fix navigation bug",
    description: "Menu items not highlighting correctly",
    category: "Bug",
    status: "To Do",
    priority: "Medium",
  },
  {
    id: "3",
    title: "Update documentation",
    description: "Add API endpoints documentation",
    category: "Documentation",
    status: "Done",
    priority: "Low",
  },
];

export const TaskProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (task: Omit<Task, "id">) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(), // Простая генерация ID
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const getTask = (id: string) => {
    return tasks.find((task) => task.id === id);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, getTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
