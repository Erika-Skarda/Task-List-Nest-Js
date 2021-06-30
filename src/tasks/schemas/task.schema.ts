import * as  mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  description: String,
  is_completed: Boolean
})