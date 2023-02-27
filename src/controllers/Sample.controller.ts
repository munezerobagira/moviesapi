import { Request, Response } from 'express';

export default class SampleController {
  static async sampleGET(request: Request, response: Response) {
    return response.status(200).json({
      message: 'Sample GET',
    });
  }
  static async samplePOST(request: Request, response: Response) {
    return response.status(201).json({
      message: 'Sample POST',
    });
  }
  static async samplePUT(request: Request, response: Response) {
    return response.status(200).json({
      message: 'Sample PUT',
    });
  }
  static async sampleDELETE(request: Request, response: Response) {
    return response.status(200).json({
      message: 'Sample DELETE',
    });
  }
  static async samplePATCH(request: Request, response: Response) {
    return response.status(200).json({
      message: 'Sample PATCH',
    });
  }
  static async sampleError(request: Request, response: Response) {
    throw new Error('Not emplemented');
    return response.status(200).json({
      message: 'Sample DELETE',
    });
  }
}
