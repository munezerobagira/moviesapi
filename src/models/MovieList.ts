import mongoose from 'mongoose';

const movieListSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.SchemaTypes.UUID, required: true },
    name: { type: String, required: true, unique: true },
    count: { type: Number, required: true },
  },
  { timestamps: true }
);
const User = mongoose.model('MovieList', movieListSchema);

export default User;
