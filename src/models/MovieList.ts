import mongoose from 'mongoose';

const movieListSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    count: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);
const User = mongoose.model('MovieList', movieListSchema);

export default User;
