import mongoose, { Mongoose } from 'mongoose';
import { hash, compare } from 'bcrypt';

const UserMovies = new mongoose.Schema(
  {
    listId: { type: mongoose.SchemaTypes.UUID, required: true },
    movieId: { type: mongoose.SchemaTypes.UUID, required: true },
    userId: { type: mongoose.SchemaTypes.UUID, required: true },
    rank: { type: Number, unique: true, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model('UserMovies', UserMovies);

export default User;
