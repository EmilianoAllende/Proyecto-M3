import { Request, Response } from "express";
import { createUsersService, getUsersService, deleteUsersService } from "../services/usersService"
import { IUser } from "../interfaces/IUsers";

export const createUser = async (req: Request, res: Response)=> {
    // const { name, email, active } = req.body;
    // const newUser: IUser = await createUsersService({ name, email, active });
    // res.status(201).json(newUser);
    res.json({message: "New user register."})
};

export const userLogin = async (req: Request, res: Response)=> {
    res.json({message: "User login in app."})
};

export const getUsers = async (req: Request, res: Response) => {
    // const users: IUser[] = await getUsersService();
    // res.status(200).json(users);
    res.json({message: "Get all users."})
};

export const getUserByID = async (req: Request, res: Response) => {
    res.json({message: "Get a specific user."})
};

export const deleteUsers = async (req: Request, res: Response)=> {
    const { id } = req.body
    await deleteUsersService(id)
    res.status(200).json({message: "User succesfully deleted."})
};