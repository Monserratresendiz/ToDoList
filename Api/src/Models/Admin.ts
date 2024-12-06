import { model, Schema } from "mongoose"

interface IAdmin {
    name: string,
    email: String,
    password: String,
    rol: String
}

const AdminSchema = new Schema<IAdmin>({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    rol:{
        type: String,
        required: true
    },

}, {timestamps: true});
export const AdminModel = model <IAdmin>('Admin', AdminSchema);
