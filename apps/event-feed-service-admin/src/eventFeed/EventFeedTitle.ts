import { EventFeed as TEventFeed } from "../api/eventFeed/EventFeed";

export const EVENTFEED_TITLE_FIELD = "id";

export const EventFeedTitle = (record: TEventFeed): string => {
  return record.id?.toString() || String(record.id);
};
