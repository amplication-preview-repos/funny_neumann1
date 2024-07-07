/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, QrCode as PrismaQrCode } from "@prisma/client";

export class QrCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.QrCodeCountArgs, "select">): Promise<number> {
    return this.prisma.qrCode.count(args);
  }

  async qrCodes(args: Prisma.QrCodeFindManyArgs): Promise<PrismaQrCode[]> {
    return this.prisma.qrCode.findMany(args);
  }
  async qrCode(
    args: Prisma.QrCodeFindUniqueArgs
  ): Promise<PrismaQrCode | null> {
    return this.prisma.qrCode.findUnique(args);
  }
  async createQrCode(args: Prisma.QrCodeCreateArgs): Promise<PrismaQrCode> {
    return this.prisma.qrCode.create(args);
  }
  async updateQrCode(args: Prisma.QrCodeUpdateArgs): Promise<PrismaQrCode> {
    return this.prisma.qrCode.update(args);
  }
  async deleteQrCode(args: Prisma.QrCodeDeleteArgs): Promise<PrismaQrCode> {
    return this.prisma.qrCode.delete(args);
  }
}
