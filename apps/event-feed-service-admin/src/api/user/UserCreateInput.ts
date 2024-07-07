import { InputJsonValue } from "../../types";
import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  events?: EventCreateNestedManyWithoutUsersInput;
};
