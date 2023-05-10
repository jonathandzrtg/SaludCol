import {Router} from 'express';
import { getOrder, getOrders, createOrder, updateOrder, deleteOrder } from '../controllers/OrdersControllers.js';

const router = Router();

router.get('/', (req ,  resp) => resp.send("Raiz") );

router.get('/orders/:id', getOrder );
router.get('/orders', getOrders );
router.post('/orders', createOrder );
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder );

export default router