import { Result } from "../result/Result";

export type Task = {
  createdAt: Date;
  description: string | null;
  id: string;
  results?: Array<Result>;
  scheduledAt: Date | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
