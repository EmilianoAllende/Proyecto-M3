import { Request, Response } from "express";
import { scheduleAppointmentService, getAppointmentsService, getAppointmentByIDService, deleteAppointmentsService } from "../services/appointmentsService"
import { Appointment } from "../entities/Appointments";
import { IScheduleAppointmentDto } from "../dtos/IScheduleAppointmentDto";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const allAppointments: Appointment[] = await getAppointmentsService();
        res.status(200).json(allAppointments);

    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};

export const getAppointmentByID = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const appointment: Appointment = await getAppointmentByIDService(Number(id));
        res.status(200).json(appointment);

    } catch (error: any) {
        res.status(400).json({error: error.message});
    };
};

export const appointmentSchedule = async (req: Request, res: Response)=> {
    try {
        const { date, time, userId, description }: IScheduleAppointmentDto = req.body;
        const newAppointment: Appointment = await scheduleAppointmentService({ date, time, userId, description });
        res.status(200).json(newAppointment);

    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};

export const cancelAppointment = async (req: Request, res: Response)=> {
    try {
        const { id } = req.params;
        const appointment: Appointment = await deleteAppointmentsService(Number(id))
        res.status(200).json({message: "Appointment succesfully canceled."}).json(appointment);
        //!Revisá bien acá si funciona.

    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};