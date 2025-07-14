import { createContext } from "react";
import type { Task } from "../types/task";

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, "id">) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  getTask: (id: string) => Task | undefined;
}

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);
