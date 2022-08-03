import { Request, Response } from "express";
import { GetUfsUseCase } from "./GetUfsUseCase";

export class GetUfsController {
  async handle(req: Request, res: Response) {
    const getUfsUseCase = new GetUfsUseCase();

    const result = await getUfsUseCase.execute();

    return res.status(200).json(result);
  }
}
