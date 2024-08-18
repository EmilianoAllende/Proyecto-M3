import { IUserDto } from "../dto/UserDto";
import { IUser } from "../interfaces/IUsers";

let users: IUser[] = [];

let id: number = 1;

export const createUsersService = async (userData: IUserDto): Promise<IUser> => {
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    };

    users.push(newUser);
    id++;
    return newUser;
    // Recibir datos de usuario.
    // Crear un nuevo usuario.
    // Incluir el nuevo usuario en el [].
    // Retornar el objeto creado. 
};

export const getUsersService = async (): Promise<IUser[]> => {
    return users;
};

export const deleteUsersService = async (id: number): Promise<void> => {
    users = users.filter((user: IUser) => {
        return user.id !== id;
    });
};