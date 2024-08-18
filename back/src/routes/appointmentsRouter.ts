import { Router, Request, Response } from 'express';
import { appointmentSchedule, cancelAppointment, getAppointmentByID, getAppointments } from '../controllers/appointmentsController';

const appointmentRouter: Router = Router();

appointmentRouter.post('/appointments/schedule', appointmentSchedule);
appointmentRouter.get("/appointments/:id", getAppointmentByID);
appointmentRouter.get("/appointments", getAppointments);
appointmentRouter.put("/appointments/cancel", cancelAppointment);

export default appointmentRouter;