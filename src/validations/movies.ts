import Joi from 'joi';

export const listIdSchema = Joi.object({
  listId: Joi.string().guid().required(),
});
export const movieListSchema = Joi.object({
  listId: Joi.string().guid().required(),
  movieId: Joi.string().guid().required(),
});
export const movieSchema = Joi.object({
  movieId: Joi.number().required(),
  rank: Joi.number().optional(),
});
