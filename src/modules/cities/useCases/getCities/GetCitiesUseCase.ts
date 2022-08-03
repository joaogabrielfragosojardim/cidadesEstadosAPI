import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { GetCitiesDTO } from "../../dtos/GetCitiesDTO";

export class GetCitiesUseCase {
  async execute({ UF }: GetCitiesDTO) {
    const cities = await prisma.cities.findMany({
      where: { uf: UF },
      select: {
        uf: true,
        name: true
      },
    });

    if (!cities.length) {
      throw new AppError("Not Found", 404);
    }

    return cities;
  }
}
