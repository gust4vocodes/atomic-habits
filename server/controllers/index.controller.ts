import { Request, Response } from 'express';

export function getHome(req: Request, res: Response) {
  res.send('API is running');
}

export function ping(req: Request, res: Response) {
  res.json({ message: 'pong 🏓' });
}

