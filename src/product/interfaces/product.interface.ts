import { Document } from "mongoose";

export interface Product extends Document {
    readonly nombre: string;
    readonly descripcion: string;
    readonly precio: number;
    readonly modelo: string;
    readonly createdAt: Date;
}