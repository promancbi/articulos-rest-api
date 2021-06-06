import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    modelo: String,
    createdAt: { type: Date, default: Date.now }
});

