import express from "express"
import { clientRoutes } from "../domains/clients/clients.routes"
import { orderRoutes } from "../domains/service-orders/service-order.routes"
import { authRoutes } from "../domains/auth/auth.routes"

const app = express();
app.use(express.json());
app.use('/clients', clientRoutes);
app.use('/orders', orderRoutes);
app.use('/auth', authRoutes);

export {app}