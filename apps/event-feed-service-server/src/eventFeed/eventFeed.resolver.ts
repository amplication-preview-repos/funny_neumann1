import * as graphql from "@nestjs/graphql";
import { EventFeedResolverBase } from "./base/eventFeed.resolver.base";
import { EventFeed } from "./base/EventFeed";
import { EventFeedService } from "./eventFeed.service";

@graphql.Resolver(() => EventFeed)
export class EventFeedResolver extends EventFeedResolverBase {
  constructor(protected readonly service: EventFeedService) {
    super(service);
  }
}
