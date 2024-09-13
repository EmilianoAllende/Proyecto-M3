import { Request, Response } from "express";
import { createUserService, getUsersService, deleteUserService, getUsersByIDService } from "../services/usersService";
import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { validateCredential } from "../services/credentialService";
import { User } from "../entities/Users";


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getUsersService();
        res.status(200).json(users);

    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};


export const getUserByID = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const user: User = await getUsersByIDService(Number(id));
        res.status(200).json(user);

    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};


export const register = async (req: Request, res: Response)=> {
    try {
        const { name, email, birthdate, username, password, nDni }: ICreateUserDto = req.body;
        const newUser: User = await createUserService({ name, email, birthdate, username, password, nDni });
        res.status(200).json(newUser);

    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};


export const login = async (req: Request, res: Response)=> {
    try {
        const { username, password } = req.body;
        await validateCredential({ username, password });
        res.status(200).json({message: "User successfully logged."});

    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};

export const deleteUsers = async (req: Request, res: Response)=> {
    const { id } = req.body;
    await deleteUserService(id);
    res.status(200).json({message: "User succesfully deleted."});
};