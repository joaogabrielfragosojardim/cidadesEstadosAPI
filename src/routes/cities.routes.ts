import { Router } from "express";
import { GetCitiesController } from "../modules/cities/useCases/getCities/GetCitiesController";

const userRoutes = Router();

const getCitiesController = new GetCitiesController();

userRoutes.get("/", getCitiesController.handle);

export { userRoutes };
