import {DateTimeInput, Edit, NumberInput, SimpleForm, TextInput, useTranslate} from "react-admin";
import * as React from "react";

const WorkLogTitle = ({ record }) => {
    const translate = useTranslate();
    return <span>
        {record ? translate('worklogs.edit.title', { title: record.task }) : ''
    }</span>;
};

const WorkLogEdit = props => (
    <Edit title={<WorkLogTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="task" />
            <TextInput multiline source="description" />
            <NumberInput source="work_hours" />
            <DateTimeInput source="work_datetime" />
        </SimpleForm>
    </Edit>
);

export default WorkLogEdit;
