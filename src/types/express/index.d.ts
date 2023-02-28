import { UserInterface } from '../User';

declare global {
  namespace Express {
    export interface Request {
      user?: UserInterface;
    }
  }
}
