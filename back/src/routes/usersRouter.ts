import { Router, Request, Response } from 'express';
import { register, getAllUsers, deleteUsers, getUserByID, login } from '../controllers/usersController';
import auth from '../middleswares/auth';

const router: Router = Router();

router.post('/users/register', register);
router.post('/users/login', login);
router.get("/users/:id", auth, getUserByID);
router.get("/users", auth, getAllUsers);
router.delete("/users", auth, deleteUsers);

export default router;