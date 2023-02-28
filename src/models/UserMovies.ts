import mongoose, { Mongoose } from 'mongoose';
import { hash, compare } from 'bcrypt';

const UserMovies = new mongoose.Schema(
  {
    listId: { type: String, required: true },
    movieId: { type: String, required: true },
    userId: { type: String, required: true },
    rank: { type: Number, unique: true, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model('UserMovies', UserMovies);

export default User;
