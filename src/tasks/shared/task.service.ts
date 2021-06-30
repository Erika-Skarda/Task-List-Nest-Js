import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    {id:1, description: "correr", is_completed: true},
    {id:2, description: "estudar nest", is_completed: false}
  ];
  
  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  create(task: Task) {
    let newId = 0;
    if(this.tasks.length > 0) {
      newId = this.tasks[this.tasks.length - 1].id;
    }
    task.id = newId + 1;
    this.tasks.push(task);
    return task;
  }

  update(task: Task) {
    const taskArray = this.getById(task.id);
    if (taskArray) {
      taskArray.description = task.description;
      taskArray.is_completed = task.is_completed;
    }
    return taskArray;
  }

  delete(id: number) {
    const index = this.tasks.findIndex((value) => value.id === id);
    this.tasks.splice(index, 1);
  }

}
