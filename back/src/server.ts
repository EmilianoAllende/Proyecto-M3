import express from "express";
import router from "./routes/usersRouter";
import appointmentRouter from "./routes/appointmentsRouter";

const server = express();

server.use(express.json());
server.use(router);
server.use(appointmentRouter);

export default server;