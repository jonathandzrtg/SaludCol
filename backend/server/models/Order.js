import mongoose from "mongoose";

const orderSchema =  new mongoose.Schema({
    estado: {
        type: String,
        require: true,
        trim: true
    },
    tipo: {
        type: String,
        require: true,
        trim: true
    },
    fecha_aprobacion: {
        type: String,
        require: true,
        trim: true
    },
    nombre_paciente:{
        type: String,
        require: true,
        trim: true
    },
    id_paciente: {
        type: String,
        require: true,
        trim: true
    },
    nota: {
        type: String,
        require: true,
        trim: true
    },
});

export default mongoose.model('Order', orderSchema);