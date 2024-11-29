import { Request, Response} from "express";
import {UserModel} from "../Models/Users";

export default{
    singUp: async (req:Request, res:Response)=>{
        try{
            //obtener informacion de la peticion
            const name = req.body.name;
            const password = req.body.password;
            const email = req.body.email;
            const rol = req.body.rol;

            //validar que la informacion exista
            if(!name || !password || !email || !rol){
                res.status(400).json({msg:"Faltan datos para crear un usuario"})
                return;
            }

            await UserModel.create({
                name,
                password,
                email,
                rol
            });

            res.status(200).json({msg:"Usuario almacenado con exito"})
            return;

        } catch (error){
            console.log("El error ocurrido: ", error)
            res.status(500).json({msg:"Ocurrio un error al registrar el usuario"})
            return;
        }  
    },
    singIn: async (req:Request, res:Response)=>{

        try{
            //obtener los datos
            const email = req.body.email;
            const password = req.body.password;

            //buscar al usuario por su correo y contraseña
            const user = await UserModel.findOne({
                email,
                password
            });

            //validar que elusuario existe
            if(!user){
                res.status(400).json({msg:"No se encontro usuario con esas credenciales"})
                return;
            }
            res.status(200).json({msg:"El usuario inicio sesion correctamente", user})
            return;

        } catch (error){
            console.log("El error ocurrido: ", error)
            res.status(500).json({msg:"Ocurrio un error al iniciar sesion"})
            return;

        }

    }
}