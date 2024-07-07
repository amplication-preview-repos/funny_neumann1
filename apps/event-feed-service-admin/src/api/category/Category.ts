import { Event } from "../event/Event";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  events?: Array<Event>;
};
