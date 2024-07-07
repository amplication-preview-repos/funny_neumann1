import { StringFilter } from "../../util/StringFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  events?: EventListRelationFilter;
};
