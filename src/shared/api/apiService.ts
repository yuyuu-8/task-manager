import type { Task } from "../types/task";
import { ExpressApiService } from "./expressApiService";

export class ApiService {
  static async getTasks(): Promise<Task[]> {
    return ExpressApiService.getTasks();
  }

  static async createTask(task: Omit<Task, "id">): Promise<Task> {
    return ExpressApiService.createTask(task);
  }

  static async updateTask(task: Task): Promise<Task> {
    return ExpressApiService.updateTask(task);
  }

  static async deleteTask(id: string): Promise<void> {
    return ExpressApiService.deleteTask(id);
  }
}
