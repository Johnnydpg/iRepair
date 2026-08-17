import cookieParser from "cookie-parser"
import express from "express"
import { clientRoutes } from "../domains/clients/clients.routes.js"
import { orderRoutes } from "../domains/service-orders/service-order.routes.js"
import { authRoutes } from "../domains/auth/auth.routes.js"
import cors from 'cors'

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
}))
app.use(express.json());
app.use('/clients', clientRoutes);
app.use('/service-orders', orderRoutes);
app.use('/auth', authRoutes);

export {app}