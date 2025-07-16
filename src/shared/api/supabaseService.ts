import type { Task } from "../types/task";

export class SupabaseService {
  private static baseUrl = import.meta.env.VITE_SUPABASE_URL;
  private static apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  private static async makeRequest(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<Response> {
    const response = await fetch(`${this.baseUrl}/rest/v1/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        apikey: this.apiKey,
        Authorization: `Bearer ${this.apiKey}`,
        Prefer: "return=representation",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Supabase API error:`, errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  }

  static async getTasks(): Promise<Task[]> {
    try {
      const response = await this.makeRequest(
        "tasks?select=*&order=created_at.desc"
      );
      const tasks = await response.json();

      if (tasks.length === 0) {
        return await this.initializeTasks();
      }

      return tasks.map(
        (task: {
          id: number | string;
          title: string;
          description: string;
          category: string;
          status: string;
          priority: string;
          created_at: string;
        }) => ({
          id: task.id.toString(),
          title: task.title,
          description: task.description,
          category: task.category,
          status: task.status,
          priority: task.priority,
          createdAt: task.created_at,
        })
      );
    } catch (error) {
      console.error("Failed to fetch tasks from Supabase:", error);
      throw new Error("Failed to load tasks from server");
    }
  }

  private static async initializeTasks(): Promise<Task[]> {
    const initialTasks: Omit<Task, "id">[] = [
      {
        title: "Implement authentication",
        description: "Add user authentication using JWT tokens",
        category: "Feature",
        status: "In Progress",
        priority: "High",
      },
      {
        title: "Fix navigation bug",
        description: "Menu items not highlighting correctly",
        category: "Bug",
        status: "To Do",
        priority: "Medium",
      },
      {
        title: "Update documentation",
        description: "Add API endpoints documentation",
        category: "Documentation",
        status: "Done",
        priority: "Low",
      },
      {
        title: "Optimize database queries",
        description: "Improve query performance in user module",
        category: "Refactor",
        status: "To Do",
        priority: "Medium",
      },
      {
        title: "Write unit tests",
        description: "Create tests for payment processing",
        category: "Test",
        status: "In Progress",
        priority: "High",
      },
      {
        title: "Add mobile support",
        description: "Implement responsive design for mobile devices",
        category: "Feature",
        status: "To Do",
        priority: "Low",
      },
    ];

    const createdTasks: Task[] = [];

    for (const task of initialTasks) {
      try {
        const createdTask = await this.createTask(task);
        createdTasks.push(createdTask);
      } catch (error) {
        console.error("Failed to create initial task:", error);
      }
    }

    return createdTasks;
  }

  static async createTask(task: Omit<Task, "id">): Promise<Task> {
    try {
      const response = await this.makeRequest("tasks", {
        method: "POST",
        body: JSON.stringify({
          title: task.title,
          description: task.description,
          category: task.category,
          status: task.status,
          priority: task.priority,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }),
      });

      const [createdTask] = await response.json();
      return {
        id: createdTask.id.toString(),
        title: createdTask.title,
        description: createdTask.description,
        category: createdTask.category,
        status: createdTask.status,
        priority: createdTask.priority,
        createdAt: createdTask.created_at,
      };
    } catch (error) {
      console.error("Failed to create task via Supabase:", error);
      throw new Error("Failed to create task on server");
    }
  }

  static async updateTask(task: Task): Promise<Task> {
    try {
      const response = await this.makeRequest(`tasks?id=eq.${task.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: task.title,
          description: task.description,
          category: task.category,
          status: task.status,
          priority: task.priority,
          updated_at: new Date().toISOString(),
        }),
      });

      const [updatedTask] = await response.json();
      return {
        id: updatedTask.id.toString(),
        title: updatedTask.title,
        description: updatedTask.description,
        category: updatedTask.category,
        status: updatedTask.status,
        priority: updatedTask.priority,
        createdAt: updatedTask.created_at,
      };
    } catch (error) {
      console.error("Failed to update task via Supabase:", error);
      throw new Error("Failed to update task on server");
    }
  }

  static async deleteTask(id: string): Promise<void> {
    try {
      await this.makeRequest(`tasks?id=eq.${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Failed to delete task via Supabase:", error);
      throw new Error("Failed to delete task on server");
    }
  }
}
