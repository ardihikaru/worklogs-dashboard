import {Create, SimpleForm, TextInput, PasswordInput} from "react-admin";
import * as React from "react";

// export const UserCreate = props => (
const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            {/*<ReferenceInput source="userId" reference="users">*/}
            {/*    <SelectInput optionText="name" />*/}
            {/*</ReferenceInput>*/}
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <PasswordInput source="password" />
            <PasswordInput source="password_confirm" />
            {/*<TextInput multiline source="body" />*/}
        </SimpleForm>
    </Create>
);

export default UserCreate;
