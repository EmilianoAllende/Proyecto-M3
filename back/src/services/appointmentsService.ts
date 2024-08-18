import { IAppointmentDto } from "../dto/AppointmentDto";
import { IAppointment } from "../interfaces/IAppointments";

let appointments: IAppointment[] = [];

let id: number = 1;

export const createAppointmentsService = async (appointmentData: IAppointmentDto): Promise<IAppointment> => {
    const newAppointment: IAppointment = {
        id,
        date: appointmentData.date,
        user: appointmentData.user,
        doctor: appointmentData.doctor
    };

    appointments.push(newAppointment);
    id++;
    return newAppointment;
};

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointments;
};

export const deleteAppointmentsService = async (id: number): Promise<void> => {
    appointments = appointments.filter((appointment: IAppointment) => {
        return appointment.id !== id;
    });
};