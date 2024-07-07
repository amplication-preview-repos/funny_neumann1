import { InputJsonValue } from "../../types";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventUpdateInput = {
  ticketPrice?: number | null;
  eventName?: string | null;
  venue?: string | null;
  eventDateTime?: Date | null;
  eventCover?: InputJsonValue;
  category?: CategoryWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
