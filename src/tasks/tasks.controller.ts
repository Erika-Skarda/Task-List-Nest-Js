import { Body, Delete } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Controller, Get, Param } from '@nestjs/common';
import { Task } from './shared/task';
import { TaskService } from './shared/task.service';

@Controller('tasks')
export class TasksController {

  constructor(
    private taskService: TaskService) {}

    @Get()
    async getAllTasks(): Promise<Task[]> {
      return this.taskService.getAllTasks();
    };

    @Get(':id')
    async getTaskById(@Param('id') id: string): Promise<Task> {
      return this.taskService.getTaskById(id);
    };

    @Post()
    async createTask(@Body() task: Task): Promise<Task> {
      return this.taskService.createTask(task);
    };

    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() task: Task): Promise<Task> {
      return this.taskService.updateTask(id, task);
    };

    @Delete(':id')
    async delete(@Param('id') id: string) {
      this.taskService.delete(id);
    }
  
}
