import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getHabits(req: Request, res: Response) {
  try {
    const habits = await prisma.habit.findMany();
    res.json(habits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching habits' });
  }
}

export async function createHabit(req: Request, res: Response) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title need to be added' });
  }

  try {
    const newHabit = await prisma.habit.create({
      data: {
        title,
      },
    });

    res.status(201).json(newHabit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error to create a new habit' });
  }
}
