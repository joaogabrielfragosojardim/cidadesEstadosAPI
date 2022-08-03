import { Router } from "express";
import { GetUfsController } from "../modules/ufs/useCases/getUfs/GetUfsController";

const ufsRoutes = Router();

const getUfsController = new GetUfsController();

ufsRoutes.get("/", getUfsController.handle);

export { ufsRoutes };
