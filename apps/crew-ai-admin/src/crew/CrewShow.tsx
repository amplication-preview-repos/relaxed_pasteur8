import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CREW_TITLE_FIELD } from "./CrewTitle";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";

export const CrewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Agent" target="crewId" label="Agents">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Crew" source="crew.id" reference="Crew">
              <TextField source={CREW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="role" source="role" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Result" target="crewId" label="Results">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="crew" source="crew.id" reference="Crew">
              <TextField source={CREW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="generatedAt" source="generatedAt" />
            <TextField label="ID" source="id" />
            <TextField label="output" source="output" />
            <ReferenceField label="task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
