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
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const Gantt = () => {
  const {selectedDeveloper} = useContext(userContext)
   let ganttInstance = GanttComponent;

  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: "Auto",
    allowTaskbarEditing: true,
  };
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
  const taskValues = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
  };

  const workWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const labelValues = {
    // eslint-disable-next-line no-template-curly-in-string
    taskLabel: '${Progress}%'
  }
  const toolbarOptions = ['Edit', 'Delete', 'Cancel', 'Update', 'Search', 'Indent', 'Outdent'];
  
  const addProject= () => {
    let dataProject = {
        TaskName: 'New Added Project',
        StartDate: new Date(),
        subtasks: [
          {}
      ]
    };
    ganttInstance.editModule.addRecord(dataProject);
    ganttInstance.editModule.dialogModule.openEditDialog();
    // projects.push(dataProject)
    // console.log(projects,'nueva lista de proyectos')
}
const addTask= () => {
  
  let dataTask = {
    TaskName: 'New Added Task', StartDate: new Date()
  };    
  
  ganttInstance.editModule.addRecord(dataTask, 'Child');
  var id = Math.max(...ganttInstance.ids);
  ganttInstance.editModule.dialogModule.openEditDialog(id);
}
  return (
    <div>
      <ButtonComponent onClick={addProject.bind(this)}>Add Project</ButtonComponent>
      <ButtonComponent onClick={addTask.bind(this)}>Add Task</ButtonComponent>
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
        workWeek={workWeek}
        selectedRowIndex={0}
        ref={gantt => ganttInstance = gantt}
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
  );}

export default Gantt;
