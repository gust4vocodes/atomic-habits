import { Router } from 'express';
import { createHabit, getHabits, getSingleHabit, deleteHabits, editHabits } from '../controllers/habits.controller';

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

router.get('/:id', async (req, res, next) => {
  try {
    await getSingleHabit(req, res);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await editHabits(req, res);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await deleteHabits(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
