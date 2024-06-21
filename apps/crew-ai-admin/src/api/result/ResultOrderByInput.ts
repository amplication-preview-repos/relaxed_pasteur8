import { SortOrder } from "../../util/SortOrder";

export type ResultOrderByInput = {
  createdAt?: SortOrder;
  crewId?: SortOrder;
  generatedAt?: SortOrder;
  id?: SortOrder;
  output?: SortOrder;
  taskId?: SortOrder;
  updatedAt?: SortOrder;
};
