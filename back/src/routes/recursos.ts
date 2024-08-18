import { Router, Request, Response } from 'express';

interface IRecurso {
    id: string,
    nombre: string
};

const router = Router();


router.post("/recursos", (req: Request, res: Response) => {
    const body: IRecurso = {
        id:'',
        nombre:''
    };
});