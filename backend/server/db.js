import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';

export async function DBconnection(){
    try {
        const db = await mongoose.connect(MONGODB_URI);
        console.log("Conexion establecida con ", db.connection.name)
    } catch (error) {
        console.log(error.message);
    }
}


// SaludCol
// ibO8LTCXgwGBRWik
// mongodb+srv://SaludCol:ibO8LTCXgwGBRWik@cluster0.2u6scs0.mongodb.net/test