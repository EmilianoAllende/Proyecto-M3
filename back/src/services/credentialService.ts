import { error } from "console";
import { ICredentialDto } from "../dtos/ICredentialDto";
import { ICredential } from "../interfaces/ICredential";

const credentials: ICredential[] = [];
let credentialID: number = 1;

export const createCredential = async (credentialDTO: ICredentialDto): Promise<number> => {
    const newCredential: ICredential = {
        id: credentialID++,
        username: credentialDTO.username,
        password: credentialDTO.password
    }
    credentials.push(newCredential);
    return newCredential.id;
};

export const validateCredential = async (credentialDTO: ICredentialDto): Promise<number> => {
    const foundCredential = credentials.find(
        (credential) => credential.username === credentialDTO.username
    )

    if (!foundCredential) {
        throw Error("Username doesn't exist.");
    } else if(foundCredential && foundCredential.password !== credentialDTO.password) {
        throw Error("Password doesn't match.");
    } else {
        return foundCredential.id;
    }
};