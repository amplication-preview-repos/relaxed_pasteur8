import { CrewWhereUniqueInput } from "../crew/CrewWhereUniqueInput";

export type AgentUpdateInput = {
  crew?: CrewWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  role?: "Option1" | null;
};
