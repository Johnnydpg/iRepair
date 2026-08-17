import { Router } from "express";
import { clientController } from "./clients.controller.js";
import { authController } from "../auth/auth.controller.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const clientRoutes = Router();
const controller = new clientController();
clientRoutes.use(authMiddleware);

clientRoutes.post('/', controller.create);
clientRoutes.get('/', controller.getAll);
clientRoutes.delete('/:id', controller.delete);

export {clientRoutes}