import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResultListRelationFilter } from "../result/ResultListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TaskWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  results?: ResultListRelationFilter;
  scheduledAt?: DateTimeNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
