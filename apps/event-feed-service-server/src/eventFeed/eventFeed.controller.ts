import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventFeedService } from "./eventFeed.service";
import { EventFeedControllerBase } from "./base/eventFeed.controller.base";

@swagger.ApiTags("eventFeeds")
@common.Controller("eventFeeds")
export class EventFeedController extends EventFeedControllerBase {
  constructor(protected readonly service: EventFeedService) {
    super(service);
  }
}
