import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>){}

  async getAllUsers() {
    return await this.userModel.find().exec();
  }

  async getUserById(id: string) {
    return this.userModel.findById(id).exec();
  }

  async getUserByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async getUserByName(name: string) {
    return this.userModel.findOne({ name: name }).exec();
  }

  async createUser(user: User) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async updateUser(id: string, user: User) {
    await this.userModel.updateOne({ _id: id }, User).exec();
    return this.getUserById(id);
  }
}
