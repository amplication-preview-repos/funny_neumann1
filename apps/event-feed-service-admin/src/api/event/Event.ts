import { JsonValue } from "type-fest";
import { Category } from "../category/Category";
import { User } from "../user/User";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  ticketPrice: number | null;
  eventName: string | null;
  venue: string | null;
  eventDateTime: Date | null;
  eventCover: JsonValue;
  category?: Category | null;
  user?: User | null;
};
