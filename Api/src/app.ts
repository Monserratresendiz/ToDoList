import express, { Application, Request, Response } from "express";
import cors from "cors";
import UsersControllers from "./controllers/UsersControllers";
import AdminControllers from "./controllers/AdminControllers";


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
app.delete("/user/delete/:id", UsersControllers.deleteUser);
app.put("/user/update/:id", UsersControllers.updateUser);
app.get("/users", UsersControllers.getAllUsers);
app.get("/user/:id", UsersControllers.getUser);
app.post("/login", UsersControllers.login);

app.post("/Admin/create", AdminControllers.createAdmin);
app.post("/Admin/sing-in",  AdminControllers.singInAdmin);
app.delete("/Admin/delete/:id", AdminControllers.deleteAdmin);
app.put("/Admin/update/:id", AdminControllers.updateAdmin);
app.get("/Admins", AdminControllers.getAllAdmins);
app.get("/Admin/:id", AdminControllers.getAdmin);
app.post("/login/Admin", AdminControllers.loginAdmin);


app.listen(4000,()=>{
    console.log('¡Servidor en linea!');
})


export default app;


