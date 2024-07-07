import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventFeedServiceBase } from "./base/eventFeed.service.base";

@Injectable()
export class EventFeedService extends EventFeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
