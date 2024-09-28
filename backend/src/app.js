import express from 'express';
import taskRouts from './routes/tasks';

const app = express()

app.use(taskRouts)

export default app;