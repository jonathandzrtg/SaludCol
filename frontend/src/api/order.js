import axios from 'axios';

export const getOrdersRequest = async () => await axios.get('/orders')

export const createOrderRequest = async (order) => await axios.post('/orders', order);
/*{
    
    const form = new FormData()

    for (let key in order){
        form.append(key, order[key])
    }

    return await axios.post('/orders', form, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});
}*/
    

export const deleteOrderRequest = async _id => await axios.delete('/orders/'+_id);

export const getOrderRequest = async _id => await axios.get('/orders/'+_id);

export const updateOrderRequest = async (_id, newFields) => axios.put(`/orders/${_id}`, newFields);