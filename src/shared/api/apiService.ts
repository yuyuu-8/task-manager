import type { Task } from "../types/task";
import { SupabaseService } from "./supabaseService";

export class ApiService {
  static async getTasks(): Promise<Task[]> {
    return SupabaseService.getTasks();
  }

  static async createTask(task: Omit<Task, "id">): Promise<Task> {
    return SupabaseService.createTask(task);
  }

  static async updateTask(task: Task): Promise<Task> {
    return SupabaseService.updateTask(task);
  }

  static async deleteTask(id: string): Promise<void> {
    return SupabaseService.deleteTask(id);
  }
}
