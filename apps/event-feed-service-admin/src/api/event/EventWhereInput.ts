import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventWhereInput = {
  id?: StringFilter;
  ticketPrice?: FloatNullableFilter;
  eventName?: StringNullableFilter;
  venue?: StringNullableFilter;
  eventDateTime?: DateTimeNullableFilter;
  eventCover?: JsonFilter;
  category?: CategoryWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
