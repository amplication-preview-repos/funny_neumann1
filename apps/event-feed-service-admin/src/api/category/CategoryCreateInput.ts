import { EventCreateNestedManyWithoutCategoriesInput } from "./EventCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  events?: EventCreateNestedManyWithoutCategoriesInput;
};
