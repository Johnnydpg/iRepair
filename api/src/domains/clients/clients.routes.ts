import { Router } from "express";
import { clientController } from "./clients.controller";

const clientRoutes = Router();
const controller = new clientController();

clientRoutes.post('/', controller.create);
clientRoutes.get('/', controller.getAll);
clientRoutes.delete('/:id', controller.delete);

export {clientRoutes}