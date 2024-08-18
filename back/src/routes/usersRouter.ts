import { Router, Request, Response } from 'express';
import { IUser } from '../interfaces/IUsers';
import { createUser, getUsers, deleteUsers, getUserByID, userLogin } from '../controllers/usersController';
import auth from '../middleswares/auth';

const router: Router = Router();

router.post('/users/register', createUser);
router.post('/users/login', userLogin);
router.get("/users/:id", auth, getUserByID);
router.get("/users", auth, getUsers);
router.delete("/users", deleteUsers);

export default router;