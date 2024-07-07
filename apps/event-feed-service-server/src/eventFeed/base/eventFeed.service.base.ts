/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, EventFeed as PrismaEventFeed } from "@prisma/client";

export class EventFeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EventFeedCountArgs, "select">
  ): Promise<number> {
    return this.prisma.eventFeed.count(args);
  }

  async eventFeeds(
    args: Prisma.EventFeedFindManyArgs
  ): Promise<PrismaEventFeed[]> {
    return this.prisma.eventFeed.findMany(args);
  }
  async eventFeed(
    args: Prisma.EventFeedFindUniqueArgs
  ): Promise<PrismaEventFeed | null> {
    return this.prisma.eventFeed.findUnique(args);
  }
  async createEventFeed(
    args: Prisma.EventFeedCreateArgs
  ): Promise<PrismaEventFeed> {
    return this.prisma.eventFeed.create(args);
  }
  async updateEventFeed(
    args: Prisma.EventFeedUpdateArgs
  ): Promise<PrismaEventFeed> {
    return this.prisma.eventFeed.update(args);
  }
  async deleteEventFeed(
    args: Prisma.EventFeedDeleteArgs
  ): Promise<PrismaEventFeed> {
    return this.prisma.eventFeed.delete(args);
  }
}
