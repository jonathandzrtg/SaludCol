import express from 'express';
import ordersRoutes from './routes/OrdersRoutes.js'

const app = express();

app.use(express.json())
app.use(ordersRoutes);


export default app;