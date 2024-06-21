import { AgentCreateNestedManyWithoutCrewsInput } from "./AgentCreateNestedManyWithoutCrewsInput";
import { ResultCreateNestedManyWithoutCrewsInput } from "./ResultCreateNestedManyWithoutCrewsInput";

export type CrewCreateInput = {
  agents?: AgentCreateNestedManyWithoutCrewsInput;
  name?: string | null;
  results?: ResultCreateNestedManyWithoutCrewsInput;
};
