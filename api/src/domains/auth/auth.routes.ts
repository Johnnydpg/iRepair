import { Router } from "express";
import { authController } from "./auth.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const authRoutes = Router();
const controller = new authController();


authRoutes.post('/register', controller.register.bind(controller));
authRoutes.post('/login', controller.login.bind(controller));
authRoutes.post('/logout', controller.logout.bind(controller));
authRoutes.get('/me', authMiddleware, controller.me.bind(controller))

export {authRoutes}