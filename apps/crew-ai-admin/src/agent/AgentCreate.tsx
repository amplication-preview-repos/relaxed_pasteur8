import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CrewTitle } from "../crew/CrewTitle";

export const AgentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="crew.id" reference="Crew" label="Crew">
          <SelectInput optionText={CrewTitle} />
        </ReferenceInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <SelectInput
          source="role"
          label="role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
