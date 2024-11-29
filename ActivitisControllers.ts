//CRUD actividades
import { Request, Response } from "express";
import{ActivityModel} from "../Models/Activities"
import { UserModel } from "../Models/Users";

export default {
    create: async (req: Request, res: Response) =>{
        try { /*  title
            dateEnd
            description
            status
            idUser*/
            //Obtener datos
            const title = req.body.title;
            const dateEnd = req.body.dateEnd;
            const description = req.body.description;
            const status = req.body.status;
            const idUser = req.body.idUser;
        
            if (
                !title || !dateEnd || !description || !status || !idUser){
                    res.status(400).json({msg:"Faltan datos para crear la actividad"});
                    return;
                }
                //validar que el usuario exista
                const user = await UserModel.findById(idUser);
                if(!user){
                    res.status(400).json({msg:"El usuario que intenta crear la actividad no existe"});
                    return;
                }
        
                const activity = await ActivityModel.create({
                    title,
                    dateEnd,
                    description,
                    status,
                    idUser
                });
                res.status(200).json({msg:"Actividad creada con exito", activity});
                return;

        } catch (error) {
            console.log("El error ocurrido: ", error)
            res.status(500).json({msg:"Ocurrio un error al guardar la actividad"});
            return;
            
        }

    }
}

