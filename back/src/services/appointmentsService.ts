import { appointmentModel, userModel } from "../config/appDataSource";
import { IScheduleAppointmentDto } from "../dtos/IScheduleAppointmentDto";
import { Appointment } from "../entities/Appointments";
import { User } from "../entities/Users";


let id: number = 1;

export const getAppointmentsService = async (): Promise<Appointment[]> => {
    const allAppointments: Appointment[] = await appointmentModel.find();
    return allAppointments;
};

export const getAppointmentByIDService = async (appointmentId: number): Promise<Appointment> => {
    const foundAppointment: Appointment | null = await appointmentModel.findOneBy({id: appointmentId});
    if (!foundAppointment) throw Error("Appointment not found.");
    return foundAppointment;
};

export const scheduleAppointmentService = async (scheduleAppointmentDTO: IScheduleAppointmentDto): Promise<Appointment> => {
    const newAppointment: Appointment = await appointmentModel.create(scheduleAppointmentDTO);
    await appointmentModel.save(newAppointment);
    const user: User | null = await userModel.findOneBy({id: scheduleAppointmentDTO.userId});

    if(!user) throw Error("User doesn't exist.");
    newAppointment.user = user;

    await appointmentModel.save(newAppointment);

    return newAppointment;
};

export const deleteAppointmentsService = async (appointmentId: number): Promise<Appointment> => {
    const appointment: Appointment | null = await appointmentModel.findOneBy({id: appointmentId});
    if (!appointment) throw Error("Appointment doesn't exist.");
    appointment.status = "canceled";
    await appointmentModel.save(appointment);
    return appointment;
};