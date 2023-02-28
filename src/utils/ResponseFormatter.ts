import { Response } from 'express';
interface ApiResponse {
  message?: string;
  status?: number;
}
interface SuccessResponse extends ApiResponse {
  data?: unknown;
}
interface ErrorResponse extends ApiResponse {
  error?: unknown;
}

export const onSuccess = (response: Response, { message = 'Success', status = 200, data = {} }: SuccessResponse) => {
  return response.status(status).json({
    message,
    data,
  });
};
export const onError = (response: Response, { message = 'Success', status = 200, error = {} }: ErrorResponse) => {
  return response.status(status).json({
    message,
    error,
  });
};
