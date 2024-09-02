import { Request, Response } from "express";
import { IUser } from "../interfaces/IUsers";
import { createUsersService, getUsersService, deleteUsersService, getUsersByIDService } from "../services/usersService"
import { ICreateUserDto } from "../dtos/ICreateUserDTO";
import { validateCredential } from "../services/credentialService";


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await getUsersService();
        res.status(200).json(users);

    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};


export const getUserByID = async (req: Request, res: Response) => {
    try {
        const id = req.params;
        const user: IUser = await getUsersByIDService(Number(id));
        res.status(200).json(user);

    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};


export const register = async (req: Request, res: Response)=> {
    try {
        const { name, email, birthdate, username, password, nDni }: ICreateUserDto = req.body;
        const newUser = await createUsersService({ name, email, birthdate, username, password, nDni });
        res.status(200).json(newUser);

    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};


export const login = async (req: Request, res: Response)=> {
    try {
        const { username, password } = req.body;
        const credentialId: number = await validateCredential({ username, password });
        res.status(200).json({message: "User successfully logged."});

    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};

export const deleteUsers = async (req: Request, res: Response)=> {
    const { id } = req.body
    await deleteUsersService(id)
    res.status(200).json({message: "User succesfully deleted."})
};