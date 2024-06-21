import { ResultUpdateManyWithoutTasksInput } from "./ResultUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  description?: string | null;
  results?: ResultUpdateManyWithoutTasksInput;
  scheduledAt?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
