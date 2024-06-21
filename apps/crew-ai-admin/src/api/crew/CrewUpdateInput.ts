import { AgentUpdateManyWithoutCrewsInput } from "./AgentUpdateManyWithoutCrewsInput";
import { ResultUpdateManyWithoutCrewsInput } from "./ResultUpdateManyWithoutCrewsInput";

export type CrewUpdateInput = {
  agents?: AgentUpdateManyWithoutCrewsInput;
  name?: string | null;
  results?: ResultUpdateManyWithoutCrewsInput;
};
