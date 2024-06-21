import { CrewWhereUniqueInput } from "../crew/CrewWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AgentWhereInput = {
  crew?: CrewWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: "Option1";
};
