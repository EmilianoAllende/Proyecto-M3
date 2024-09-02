import { ICreateUserDto } from "../dtos/ICreateUserDTO";
import { IUser } from "../interfaces/IUsers";
import { createCredential } from "./credentialService";

let users: IUser[] = [];

let userID: number = 1;


export const getUsersService = async (): Promise<IUser[]> => {
    const allUsers: IUser[] = users;
    return allUsers;
};


export const getUsersByIDService = async (id: number): Promise<IUser> => {
    const foundUser: IUser | undefined = users.find(user => user.id === id);
    if (!foundUser) throw Error("User not found.");
    return foundUser;
};


export const createUsersService = async (createUserDto: ICreateUserDto) => {
    const newCredentialID: number = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    });

    const newUser: IUser = {
        id: userID++,
        name: createUserDto.name,
        email: createUserDto.email,
        birthdate: createUserDto.birthdate,
        nDni: createUserDto.nDni,
        credentialsId: newCredentialID
        
    }

    users.push(newUser);
    return newUser;
};


export const deleteUsersService = async (id: number): Promise<void> => {
    users = users.filter((user: IUser) => {
        return user.id !== id;
    });
};