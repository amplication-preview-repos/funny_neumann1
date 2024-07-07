import { InputJsonValue } from "../../types";
import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  events?: EventUpdateManyWithoutUsersInput;
};
