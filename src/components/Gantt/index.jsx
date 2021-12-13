import React from "react";
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Inject,
  Toolbar,
  Selection,
  Filter
} from "@syncfusion/ej2-react-gantt";
import {data} from "./datasource";
import "./Gantt.css";

const Gantt = () => {
  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: "Auto",
    allowTaskbarEditing: true,
  };

  const taskValues = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
  };

  const labelValues = {
    // eslint-disable-next-line no-template-curly-in-string
    taskLabel: '${Progress}%'
  }

  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'Search', 'Indent', 'Outdent'];

  return (
    <div>
      <GanttComponent
        dataSource={data}
        taskFields={taskValues}
        toolbar={toolbarOptions}
        height="550px"
        timelineSettings={{ timelineViewMode: "Week" }}
        gridLines='Both'
        editSettings={editOptions}
        taskMode='Auto'
        allowSelection={true}
        rowHeight={50}
        labelSettings={labelValues}
        splitterSettings={{position:"40%"}}
      >
        <Inject services={[Edit, Toolbar, Selection, Filter]} />
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID" textAlign="Center" />
          <ColumnDirective
            field="TaskName"
            headerText="Project Name"
            textAlign="Center"
          />
          <ColumnDirective
            field="StartDate"
            format="dd-MMM-yy"
            textAlign="Center"
          />
          <ColumnDirective field="Duration" textAlign="Center" />
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
};

export default Gantt;
