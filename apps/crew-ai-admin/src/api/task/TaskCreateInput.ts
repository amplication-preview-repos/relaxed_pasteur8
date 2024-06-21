import { ResultCreateNestedManyWithoutTasksInput } from "./ResultCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  description?: string | null;
  results?: ResultCreateNestedManyWithoutTasksInput;
  scheduledAt?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
