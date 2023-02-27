import mongoose from 'mongoose';
import { hash, compare } from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
userSchema.pre('save', async function presave(next) {
  if (!this.isModified('password')) return next();
  this.password = await hash(this.password, 10);
  return next();
});

userSchema.methods.comparePassword = async function comparePassword(password: string) {
  const result = await compare(password, this.password);
  return result;
};
const User = mongoose.model('User', userSchema);

export default User;
