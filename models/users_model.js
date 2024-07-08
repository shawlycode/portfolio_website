import { model, Schema } from "mongoose";


const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, required: true }
})

export const UserModel = model('Users', userSchema);