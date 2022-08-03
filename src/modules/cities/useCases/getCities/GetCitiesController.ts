import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { GetCitiesUseCase } from "./GetCitiesUseCase";

interface IQuery {
  UF?: string;
}

export class GetCitiesController {
  async handle(req: Request, res: Response) {
    let { UF }: IQuery = req.query;

    const getCitiesUseCase = new GetCitiesUseCase();

    if (UF) {
      UF = UF.toUpperCase();
      const result = await getCitiesUseCase.execute({ UF });

      return res.status(200).json(result);
    }

    throw new AppError("Please send UF", 500);
  }
}
