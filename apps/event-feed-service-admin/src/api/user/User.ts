import { JsonValue } from "type-fest";
import { Event } from "../event/Event";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  events?: Array<Event>;
};
