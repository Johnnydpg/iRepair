import { Router } from "express";
import { serviceOrderController } from "./service-order.controller";

const orderRoutes = Router();
const controller = new serviceOrderController();

orderRoutes.post('/', controller.create);
orderRoutes.get('/', controller.getAll);
orderRoutes.delete('/:id', controller.delete);

export {orderRoutes}