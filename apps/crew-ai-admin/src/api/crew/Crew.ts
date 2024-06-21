import { Agent } from "../agent/Agent";
import { Result } from "../result/Result";

export type Crew = {
  agents?: Array<Agent>;
  createdAt: Date;
  id: string;
  name: string | null;
  results?: Array<Result>;
  updatedAt: Date;
};
