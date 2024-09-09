import { userModel } from "../config/appDataSource";
import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { Credential } from "../entities/Credentials";
import { User } from "../entities/Users";
import { IUser } from "../interfaces/IUsers";
import { createCredential } from "./credentialService";

let users: IUser[] = [];


export const getUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await userModel.find();
    return allUsers;
};


export const getUsersByIDService = async (id: number): Promise<User> => {
    const foundUser: User | undefined = await userModel.findOne({ where: {id}, relations: ['appointments'] });
    if (!foundUser) throw Error("User not found.");
    return foundUser;
};


export const createUsersService = async (createUserDto: ICreateUserDto): Promise<User> => {
    const newUser: User = await userModel.create(createUserDto);
    await userModel.save(newUser);
    const newCredential: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    });

    newUser.credential = newCredential;
    userModel.save(newUser);

    return newUser;
};


export const deleteUsersService = async (id: number): Promise<void> => {
    users = users.filter((user: IUser) => {
        return user.id !== id;
    });
};