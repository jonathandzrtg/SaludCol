import { useState, createContext, useContext, useEffect } from 'react';
import { getOrdersRequest, createOrderRequest, deleteOrderRequest, getOrderRequest, updateOrderRequest } from "../api/order";

export const orderContext = createContext();

export const useOrders = () => {
    const context = useContext(orderContext);
    return context;
}

export const OrderProvideer = ({children}) => {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        const res = await getOrdersRequest()
        setOrders(res.data)
    }

    const createOrder = async (order) => {
        try {
            const res = await createOrderRequest(order);
            setOrders([...orders, res.data]);
        } catch (error) {
            alert(error)
        }
    }

    const deleteOrder = async (_id) => {
        const res = await deleteOrderRequest(_id);
        try {
            if(res.status === 204){
                setOrders(orders.filter(order => order._id !== _id));
            }
        } catch (error) {
            return res.status(500).json("Error: " + error.message);
        }
    }

    const getOrder = async (_id) => {
        const res = await getOrderRequest(_id)
        return res.data
    }

    const updateOrder = async (_id, order) => {
        const res = await updateOrderRequest(_id, order)
        setOrders(orders.map((order) => (order._id === _id ? res.data : order)));
    }

    useEffect(() => {
        getOrders()
    }, [])

    return <orderContext.Provider value = {{
        orders,
        getOrders,
        createOrder,
        deleteOrder,
        getOrder,
        updateOrder
    }}>
        {children}
    </orderContext.Provider>
};