import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  ticketPrice?: SortOrder;
  eventName?: SortOrder;
  venue?: SortOrder;
  eventDateTime?: SortOrder;
  eventCover?: SortOrder;
  categoryId?: SortOrder;
  userId?: SortOrder;
};
