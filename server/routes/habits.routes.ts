import { Router } from 'express';
import { createHabit, getHabits } from '../controllers/habits.controller';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    await getHabits(req, res);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    await createHabit(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
