import { Router } from "express";
import { serviceOrderController } from "./service-order.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const orderRoutes = Router();
const controller = new serviceOrderController();
orderRoutes.use(authMiddleware);

orderRoutes.post('/', controller.create);
orderRoutes.get('/', controller.getAll);
orderRoutes.delete('/:id', controller.delete);

export {orderRoutes}