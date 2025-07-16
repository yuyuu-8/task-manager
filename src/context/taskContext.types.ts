import { createContext } from "react";
import type { Task } from "../types/task";

export interface TaskContextProps {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  createTask: (task: Omit<Task, "id">) => Promise<void>;
  updateTask: (task: Task) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  getTask: (id: string) => Task | undefined;
  loadTasks: () => Promise<void>;
}

export const TaskContext = createContext<TaskContextProps | undefined>(
  undefined
);
