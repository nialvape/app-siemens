import { Router } from 'express';
import { createTask, deleteTask, getTask, getTaskCount, getTasks, updateTask } from '../controllers/tasks'

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTask)
router.get('/tasks/count', getTaskCount)  
router.post('/tasks', createTask)
router.delete('/tasks/:id', deleteTask)
router.put('/tasks/:id', updateTask)

export default router