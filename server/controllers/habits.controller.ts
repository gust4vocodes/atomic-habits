import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
//GET HABITS
export async function getHabits(req: Request, res: Response) {
  try {
    const habits = await prisma.habit.findMany();
    res.json(habits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching habits' });
  }
}

//DELETE HABITS
export async function deleteHabits(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const habits = await prisma.habit.delete({
      where: { id },
    });
    res.status(200).json({message: 'Habit deleted successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting habits' });
  }
}

//UPDATE HABITS
export async function editHabits(req: Request, res: Response) {
  const { title } = req.body;
  const { id } = req.params;
  try {
    const habits = await prisma.habit.update( {
      where: { id },
      data: { title }
    });
    res.status(200).json({message: 'Habit updated successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating habits' });
  }
}

//GET SINGLE HABIT
export async function getSingleHabit(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const habits = await prisma.habit.findUnique( {
      where: { id }
    });if (!habits) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    res.status(200).json(habits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching habit' });
  }
}

//CREATE HABITS
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
