import { CrewWhereUniqueInput } from "../crew/CrewWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type ResultWhereInput = {
  crew?: CrewWhereUniqueInput;
  generatedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  output?: JsonFilter;
  task?: TaskWhereUniqueInput;
};
