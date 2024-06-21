import { Crew } from "../crew/Crew";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type Result = {
  createdAt: Date;
  crew?: Crew | null;
  generatedAt: Date | null;
  id: string;
  output: JsonValue;
  task?: Task | null;
  updatedAt: Date;
};
