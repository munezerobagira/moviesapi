import Joi from 'joi';

export const listIdSchema = Joi.object({
  listId: Joi.string().required(),
});
export const movieListSchema = Joi.object({
  listId: Joi.string().required(),
  movieId: Joi.number(),
});
export const movieSchema = Joi.object({
  movieId: Joi.number().required(),
  rank: Joi.number().optional(),
});
