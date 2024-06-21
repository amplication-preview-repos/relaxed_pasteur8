import { CrewWhereUniqueInput } from "../crew/CrewWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type ResultCreateInput = {
  crew?: CrewWhereUniqueInput | null;
  generatedAt?: Date | null;
  output?: InputJsonValue;
  task?: TaskWhereUniqueInput | null;
};
