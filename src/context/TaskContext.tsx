import type { FC, PropsWithChildren } from "react";
import { useState, useEffect } from "react";
import type { Task } from "../types/task";
import { TaskContext } from "./taskContext.types";
import { ApiService } from "../services/apiService";

export const TaskProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Load tasks from server
  const loadTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const serverTasks = await ApiService.getTasks();
      setTasks(serverTasks);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      console.error("Error loading tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load tasks on component initialization
  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async (task: Omit<Task, "id">) => {
    setLoading(true);
    setError(null);
    try {
      const newTask = await ApiService.createTask(task);
      setTasks((prev) => [...prev, newTask]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error creating task");
      console.error("Error creating task:", err);
      throw err; // Re-throw error for UI handling
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (updatedTask: Task) => {
    setLoading(true);
    setError(null);
    try {
      await ApiService.updateTask(updatedTask);
      setTasks((prev) =>
        prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error updating task");
      console.error("Error updating task:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await ApiService.deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error deleting task");
      console.error("Error deleting task:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getTask = (id: string) => {
    return tasks.find((task) => task.id === id);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        createTask,
        updateTask,
        deleteTask,
        getTask,
        loadTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
