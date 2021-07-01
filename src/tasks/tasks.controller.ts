import { 
    Controller, 
    Get, 
    Param, 
    Body, 
    Post, 
    Put, 
    Delete ,
    UseGuards
  } from '@nestjs/common';
import { Task } from './shared/task';
import { TaskService } from './shared/task.service';
import { JwtAuthGuard } from 'src/auth/shared/jwt-guard.guard';

@Controller('tasks')
export class TasksController {

  constructor(
    private taskService: TaskService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllTasks(): Promise<Task[]> {
      return this.taskService.getAllTasks();
    };

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getTaskById(@Param('id') id: string): Promise<Task> {
      return this.taskService.getTaskById(id);
    };

    @UseGuards(JwtAuthGuard)
    @Post()
    async createTask(@Body() task: Task): Promise<Task> {
      return this.taskService.createTask(task);
    };

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() task: Task): Promise<Task> {
      return this.taskService.updateTask(id, task);
    };

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
      this.taskService.delete(id);
    }
  
}
