import { credentialModel } from "../config/appDataSource";
import { ICredentialDto } from "../dtos/ICredentialDto";
import { Credential } from "../entities/Credentials";

export const createCredential = async (credentialDTO: ICredentialDto): Promise<Credential> => {
    const newCredential: Credential = await credentialModel.create(credentialDTO)
    await credentialModel.save(newCredential);

    return newCredential;
};

export const validateCredential = async (credentialDTO: ICredentialDto): Promise<Credential> => {
    const credential: Credential | null = await credentialModel.findOneBy({username: credentialDTO.username});

    if (!credential) {
        throw Error("Username doesn't exist.");
    } else if(credential && credential.password !== credentialDTO.password) {
        throw Error("Password doesn't match.");
    } else {
        return credential;
    };
};