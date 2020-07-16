import {useMediaQuery} from "@material-ui/core";
import {Datagrid, EditButton, List, SimpleList, TextField, NumberField} from "react-admin";
import * as React from "react";

const WorkLogList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.task}
                    secondaryText={record => record.work_hours + " Hours"}
                    tertiaryText={record => record.work_datetime}
                />
            ) : (
                <Datagrid>
                    {/*<TextField source="id"/>*/}
                    <TextField source="task"/>
                    <TextField source="description"/>
                    <NumberField source="work_hours"/>
                    <TextField source="work_datetime"/>
                    <EditButton/>
                </Datagrid>
            )}
        </List>
    );
};

export default WorkLogList;
