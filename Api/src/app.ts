import express, { Application, Request, Response } from "express";
import cors from "cors";
import UsersControllers from "./controllers/UsersControllers";

const app: Application =express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(_req:Request,res:Response) => {
    res.send("Hola desde mi servidor con TS")
});

//rutas de usuario
app.post("/user/create", UsersControllers.singUp);
app.post("/user/sing-in", UsersControllers.singIn);


export default app;