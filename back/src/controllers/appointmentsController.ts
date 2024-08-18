import { Request, Response } from "express";
import { createAppointmentsService, getAppointmentsService, deleteAppointmentsService } from "../services/appointmentsService"
import { IAppointment } from "../interfaces/IAppointments";

export const appointmentSchedule = async (req: Request, res: Response)=> {
    // const { name, email, active } = req.body;
    // const newUser: IUser = await createAppointmentsService({ name, email, active });
    // res.status(201).json(newUser);
    res.json({message: "New appointment scheduled."})
};

export const getAppointments = async (req: Request, res: Response) => {
    // const users: IUser[] = await getUsersService();
    // res.status(200).json(users);
    res.json({message: "Get all appointments."})
};

export const getAppointmentByID = async (req: Request, res: Response) => {
    res.json({message: "Get a specific appointment."})
};

export const cancelAppointment = async (req: Request, res: Response)=> {
    // const { id } = req.body
    // await deleteAppointmentsService(id)
    // res.status(200).json({message: "Appointment succesfully canceled."})
    res.json({message: "Change appointment status to canceled."});
};