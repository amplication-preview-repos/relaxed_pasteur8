import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CrewTitle } from "../crew/CrewTitle";
import { TaskTitle } from "../task/TaskTitle";

export const ResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="crew.id" reference="Crew" label="crew">
          <SelectInput optionText={CrewTitle} />
        </ReferenceInput>
        <DateTimeInput label="generatedAt" source="generatedAt" />
        <div />
        <ReferenceInput source="task.id" reference="Task" label="task">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
