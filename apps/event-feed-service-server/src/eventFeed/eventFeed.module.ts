import { Module } from "@nestjs/common";
import { EventFeedModuleBase } from "./base/eventFeed.module.base";
import { EventFeedService } from "./eventFeed.service";
import { EventFeedController } from "./eventFeed.controller";
import { EventFeedResolver } from "./eventFeed.resolver";

@Module({
  imports: [EventFeedModuleBase],
  controllers: [EventFeedController],
  providers: [EventFeedService, EventFeedResolver],
  exports: [EventFeedService],
})
export class EventFeedModule {}
