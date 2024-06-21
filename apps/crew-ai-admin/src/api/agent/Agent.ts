import { Crew } from "../crew/Crew";

export type Agent = {
  createdAt: Date;
  crew?: Crew | null;
  email: string | null;
  id: string;
  name: string | null;
  role?: "Option1" | null;
  updatedAt: Date;
};
