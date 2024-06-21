import { AgentListRelationFilter } from "../agent/AgentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResultListRelationFilter } from "../result/ResultListRelationFilter";

export type CrewWhereInput = {
  agents?: AgentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  results?: ResultListRelationFilter;
};
