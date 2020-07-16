import {Create, SimpleForm, TextInput, DateTimeInput, NumberInput} from "react-admin";
import * as React from "react";

const WorkLogCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="task" />
            <TextInput multiline source="description" />
            <NumberInput source="work_hours" />
            <DateTimeInput source="work_datetime" />
        </SimpleForm>
    </Create>
);

export default WorkLogCreate;
