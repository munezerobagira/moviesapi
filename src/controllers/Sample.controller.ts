import { Request, Response } from 'express';
import { onSuccess } from '../utils/ResponseFormatter';

export default class SampleController {
  static async sampleGET(request: Request, response: Response) {
    return onSuccess(response, {});
  }
  static async samplePOST(request: Request, response: Response) {
    return onSuccess(response, { status: 201, message: 'Sample POST' });
  }
  static async samplePUT(request: Request, response: Response) {
    return onSuccess(response, { message: 'Sample PUT' });
  }
  static async sampleDELETE(request: Request, response: Response) {
    return onSuccess(response, { message: 'Sample DELETE' });
  }
  static async samplePATCH(request: Request, response: Response) {
    return onSuccess(response, { message: 'Sample PATCH' });
  }
  static async sampleError(request: Request, response: Response) {
    throw new Error('Not emplemented');
  }
}
