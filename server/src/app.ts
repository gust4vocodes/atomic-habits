import express from 'express';
import cors from 'cors';

import indexRoutes from '../routes/index.routes';
import habitRoutes from '../routes/habits.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', indexRoutes);
app.use('/api/habits', habitRoutes);

export default app;