import { prisma } from "../../../../prisma/client";

export class GetUfsUseCase {
  async execute() {
    const ufs = await prisma.uFs.findMany({
      select: {
        ufName: true,
      },
    });

    return ufs;
  }
}
