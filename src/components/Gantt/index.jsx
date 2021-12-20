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
import "./Gantt.css"
import { useContext } from "react";
import userContext from "../../context/userContext";

const Gantt = () => {
  const {selectedDeveloper} = useContext(userContext)
  console.log(selectedDeveloper,'desarrollador seleccionando')
  
   const dataBase = [ ]
  const projects = Object.values(selectedDeveloper.projects)
  projects.forEach(element => {
    let countTask = 0;
    let tasks = Object.values(element.tasks)
    let finalTasks = []
    tasks.forEach(task=>{
      const newTask = {
        TaskID:1,
        TaskName: task.taskName,
        StartDate:new Date(task.startDate*1000),
        Duration:task.duration,
        Progress:task.progress,
      }
      finalTasks.push(newTask)
    })
    console.log(finalTasks,'lista final de tareas')
    countTask++
    dataBase.push(
      {   
          TaskID: countTask,
          TaskName: element.projectName,
          StartDate: new Date(element.startDate * 1000),
          EndDate: new Date(element.endDate*1000),
          subtasks:finalTasks

     }
    )
  });
  console.log(dataBase,'asdfasd')


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
        dataSource={dataBase}
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
