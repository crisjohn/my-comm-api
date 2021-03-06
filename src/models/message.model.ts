import { Schema, Document } from 'mongoose';

export class Message extends Document {
  constructor(
    private community: string,
    private user: string,
    private message: string,
    private date: string,
  ) {
    super();
  }
}

export const MessageSchema = new Schema({
  community: {
    type: String,
    ref: 'communities',
  },
  user: {
    type: String,
    ref: 'users',
  },
  message: String,
  date: { type: Date, default: Date.now },
});
