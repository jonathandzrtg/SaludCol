import Order from "../models/Order.js";

export const getOrder = async (req,  res) => {
    try {
        const order = await Order.findById(req.params.id)
        if(!order){
            return res.sendStatus(404)
        }
        else{
            return res.json(order)
        }
    } catch (error) {
        return res.status(500).json('Error: ' + error.message);
    }
    
};

export const getOrders = async(req , res) => {
    try {
        const orders = await Order.find()
        res.send(orders)
    } catch (error) {
        return res.status(500).json('Error: ' + error.message);
    } 
};

export const createOrder = async (req, res) => {
    try {
        const { estado, tipo, fecha_aprobacion, nombre_paciente, id_paciente, nota} = req.body
        const newOrder = new Order({estado, tipo, fecha_aprobacion, nombre_paciente, id_paciente, nota})
        await newOrder.save()
        return res.json(newOrder)
    } catch (error) {
        return res.status(500).json('Error: ' + error.message);
    }
    
};

export const updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true})
         console.log(order)
        return res.send("Orden actualizada")
    }catch (error) {
        return res.status(500).json('Error: ' + error.message);
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id)
        if(!deleteOrder){
            return res.sendStatus(404)
        }
        else{
            return res.sendStatus(204) 
        }
    } catch (error) {
        return res.status(500).json('Error: ' + error.message);
    }
};



