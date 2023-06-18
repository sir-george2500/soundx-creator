import { Schema, model, models } from 'mongoose';

console.log("About to send the data ")
const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
  },
  image: {
    type: String,
  },
});
console.log("data gone")
const User = models.User || model('User', UserSchema);

export default User;