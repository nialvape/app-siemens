import { Router } from 'express';
import { createUser, deleteUser, getUser, getUsers, getUsersCount, loginUser, updateUser } from '../controllers/users'

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.get('/users/count', getUsersCount) 
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)
router.post('/login', loginUser)

export default router