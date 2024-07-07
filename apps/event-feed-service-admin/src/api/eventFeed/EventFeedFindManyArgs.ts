import { EventFeedWhereInput } from "./EventFeedWhereInput";
import { EventFeedOrderByInput } from "./EventFeedOrderByInput";

export type EventFeedFindManyArgs = {
  where?: EventFeedWhereInput;
  orderBy?: Array<EventFeedOrderByInput>;
  skip?: number;
  take?: number;
};
