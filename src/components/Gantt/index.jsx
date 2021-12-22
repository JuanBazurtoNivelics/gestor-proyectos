import React from "react";
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Inject,
  Toolbar,
  Selection,
  Filter,
  RowDD,
} from "@syncfusion/ej2-react-gantt";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { data } from "./datasource";
import "./Gantt.css";

const GanttDiagram = () => {
  let ganttInstance = GanttComponent;

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

  const workWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const labelValues = {
    // eslint-disable-next-line no-template-curly-in-string
    taskLabel: "${Progress}%",
  };

  const toolbarOptions = [
    "Edit",
    "Delete",
    "Cancel",
    "Update",
    "Search",
    "Indent",
    "Outdent",
  ];

  const addProject = () => {
    let dataProject = {
      TaskName: "New Added Project",
      StartDate: new Date(),
      subtasks: [{}],
    };
    ganttInstance.editModule.addRecord(dataProject);
    ganttInstance.editModule.dialogModule.openEditDialog();
  };
  const addTask = () => {
    let dataTask = {
      TaskName: "New Added Task",
      StartDate: new Date(),
    };

    ganttInstance.editModule.addRecord(dataTask, "Child");
    var id = Math.max(...ganttInstance.ids);
    ganttInstance.editModule.dialogModule.openEditDialog(id);
  };

  const toolbarClickHandler = (args) => {
    if (args.item.properties.tooltipText !== "Search") {
      console.log("Changes");
    }
  };

  return (
    <div>
      <ButtonComponent onClick={addProject.bind(this)}>
        Add Project
      </ButtonComponent>
      <ButtonComponent onClick={addTask.bind(this)}>Add Task</ButtonComponent>
      <GanttComponent
        dataSource={data}
        taskFields={taskValues}
        toolbar={toolbarOptions}
        height="550px"
        timelineSettings={{ timelineViewMode: "Week" }}
        gridLines="Both"
        editSettings={editOptions}
        taskMode="Auto"
        allowSelection={true}
        allowRowDragAndDrop={true}
        rowHeight={50}
        labelSettings={labelValues}
        splitterSettings={{ position: "40%" }}
        workWeek={workWeek}
        selectedRowIndex={0}
        ref={(gantt) => (ganttInstance = gantt)}
        toolbarClick={toolbarClickHandler}
      >
        <Inject services={[Filter, RowDD, Edit, Toolbar, Selection]} />
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

export default GanttDiagram;
