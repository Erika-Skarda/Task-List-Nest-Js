import { Injectable } from '@nestjs/common';
import { Task } from './task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as _ from "lodash";

@Injectable()
export class TaskService {

  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getAllTasks() {
    return await this.taskModel.find().exec();
  }

  async getTaskById(id: string) {
    return this.taskModel.findById(id).exec();
  }

  async createTask(task: Task) {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  }

  async updateTask(id: string, task: Task) {
    await this.taskModel.updateOne({ _id: id }, task).exec();
    return this.getTaskById(id);
  }

  async delete(id: string) {
    return await this.taskModel.deleteOne({ _id: id }).exec()
  }

}
