import { Router } from "express";
import { serviceOrderController } from "./service-order.controller.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const orderRoutes = Router();
const controller = new serviceOrderController();
orderRoutes.use(authMiddleware);

orderRoutes.post('/', controller.create);
orderRoutes.get('/', controller.getAll);
orderRoutes.delete('/:id', controller.delete);

export {orderRoutes}