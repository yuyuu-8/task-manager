import type { Task } from "../types/task";

const API_BASE_URL = "http://localhost:3001/api";

/**
 * A class to interact with the Express REST API for tasks.
 */
export class ExpressApiService {
  /**
   * Fetches all tasks from the server.
   * @returns A promise that resolves to an array of tasks.
   */
  static async getTasks(): Promise<Task[]> {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const result = await response.json();
    return result.data;
  }

  /**
   * Creates a new task.
   * @param task - The task data to create.
   * @returns A promise that resolves to the created task.
   */
  static async createTask(
    task: Omit<Task, "id" | "createdAt" | "updatedAt">
  ): Promise<Task> {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
    const result = await response.json();
    return result.data;
  }

  /**
   * Updates an existing task.
   * @param task - The task data to update.
   * @returns A promise that resolves to the updated task.
   */
  static async updateTask(task: Task): Promise<Task> {
    const response = await fetch(`${API_BASE_URL}/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: task.title,
        description: task.description,
        category: task.category,
        status: task.status,
        priority: task.priority,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to update task");
    }
    const result = await response.json();
    return result.data;
  }

  /**
   * Deletes a task by its ID.
   * @param id - The ID of the task to delete.
   * @returns A promise that resolves when the task is deleted.
   */
  static async deleteTask(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  }
}
