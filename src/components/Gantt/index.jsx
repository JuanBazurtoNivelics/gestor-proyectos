import React, {Component} from "react";
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Inject,
  Toolbar,
  Selection,
  RowDD
} from "@syncfusion/ej2-react-gantt";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { data } from "./datasource";
import "./Gantt.css";

class GanttDiagram extends Component {
  constructor(){
    super(...arguments);
    this.editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    showDeleteConfirmDialog: true,
    mode: "Auto",
    allowTaskbarEditing: true,
  };
  this.taskValues = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
  };

  this.workWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  this.labelValues = {
    // eslint-disable-next-line no-template-curly-in-string
    taskLabel: '${Progress}%'
  }

  this.toolbarOptions = ['Edit', 'Delete', 'Cancel', 'Update', 'Search', 'Indent', 'Outdent'];
  }
  clickHandler= () => {
    let dataProject = {
        TaskName: 'New Added Project',
        StartDate: new Date(),
        subtasks: [
          {}
      ]
    };
    this.ganttInstance.editModule.addRecord(dataProject);
    this.ganttInstance.editModule.dialogModule.openEditDialog();
}
clickHandlerTask= () => {
  
  let dataTask = {
    TaskName: 'New Added Task', StartDate: new Date()
  };    
  
  this.ganttInstance.editModule.addRecord(dataTask, 'Child');
  var id = Math.max(...this.ganttInstance.ids);
  this.ganttInstance.editModule.dialogModule.openEditDialog(id);
}
render(){
  return (
    <div>
      <ButtonComponent onClick={this.clickHandler.bind(this)}>Add Project</ButtonComponent>
      <ButtonComponent onClick={this.clickHandlerTask.bind(this)}>Add Task</ButtonComponent>
      <GanttComponent
        dataSource={data}
        taskFields={this.taskValues}
        toolbar={this.toolbarOptions}
        height="550px"
        timelineSettings={{ timelineViewMode: "Week" }}
        gridLines='Both'
        editSettings={this.editOptions}
        taskMode='Auto'
        allowSelection={true}
        allowRowDragAndDrop={true}
        rowHeight={50}
        labelSettings={this.labelValues}
        splitterSettings={{position:"40%"}}
        workWeek={this.workWeek}
        selectedRowIndex={0}
        ref={gantt => this.ganttInstance = gantt} 
      >
        <Inject services={[RowDD, Edit, Toolbar, Selection]} />
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
  );}
};

export default GanttDiagram;
