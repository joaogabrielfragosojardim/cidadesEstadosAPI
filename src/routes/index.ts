import { Router } from "express";
import { userRoutes } from "./cities.routes";
import { ufsRoutes } from "./ufs.routes";

const routes = Router();

routes.use("/cities", userRoutes);
routes.use("/ufs", ufsRoutes);

export { routes };
