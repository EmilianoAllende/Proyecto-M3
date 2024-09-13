import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import { Credential } from "../entities/Credentials";
import { Appointment } from "../entities/Appointments";
import { User } from "../entities/Users";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: DB_PORT || 5432,
    username: DB_USERNAME || "test",
    password: DB_PASSWORD || "test",
    database: DB_NAME || "test",
    synchronize: true,
    logging: false,
    dropSchema: true,
    entities: [Appointment, Credential, User],
    subscribers: [],
    migrations: [],
});

export const userModel = AppDataSource.getRepository(User);
export const credentialModel = AppDataSource.getRepository(Credential);
export const appointmentModel = AppDataSource.getRepository(Appointment);
