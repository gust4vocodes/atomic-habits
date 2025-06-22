import { Request, Response } from 'express';
import { error } from 'console';


export function getHome(req: Request, res: Response) {
  res.send('API is running');
}

