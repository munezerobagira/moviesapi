import MovieList from '../models/MovieList';
import UserMovies from '../models/UserMovies';
import { MovieListInterface, UserMoviesInterface } from '../types/Movie';

export async function createMovieList({ name, userId }: MovieListInterface) {
  const createdPlaylist = await MovieList.create({
    name,
    userId,
  });
  return createdPlaylist;
}
export async function getUserLists(userId: string) {
  const fetchedLists = await MovieList.find({
    userId,
  });
  return fetchedLists;
}

export async function addMovieToList({ listId, movieId, userId }: UserMoviesInterface) {
  const movieList = await MovieList.findOne({
    id: listId,
  });
  if (!movieList) return null;
  movieList.count = movieList.count + 1;
  const addedMovie = await UserMovies.create({
    listId,
    movieId,
    userId,
    rank: movieList.count,
  });
  await movieList.save();
  return addedMovie;
}

export async function removeMovieFromList({
  movieId,
  listId,
  userId,
}: {
  movieId: string;
  listId: String;
  userId: string;
}) {
  const deletedMovie = await UserMovies.findOneAndDelete({
    movieId,
    listId,
    userId,
  });
  return deletedMovie;
}
export async function updateMovieRank({
  movieId,
  rank,
  listId,
  userId,
}: {
  movieId: string;
  rank: number;
  listId: string;
  userId: string;
}) {
  const movie = await UserMovies.findOne({ movieId, listId, userId });
  if (!movie) return null;
  const existingMovieWithRank = await UserMovies.findOne({ rank, listId, userId });
  if (existingMovieWithRank) {
    existingMovieWithRank.rank = movie.rank;
    await existingMovieWithRank.save();
  }
  movie.rank = rank;
  await movie.save();

  return movie;
}
export async function getListMovies({ listId, userId }: { listId: string; userId: string }) {
  const listMovies = await UserMovies.find({
    listId,
    userId,
  });
  return listMovies;
}
