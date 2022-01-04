
import React,{ useContext, useEffect } from "react";
import userContext from "../../context/UserContext";
import { collection, getDocs,updateDoc,doc  } from "firebase/firestore";
import { db } from "../../firebase-config";
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
import { useParams } from "react-router-dom";

const GanttDiagram =  () => {
  
  const { currentProjects,selectedDeveloper} = useContext(userContext)
  let ganttInstance = GanttComponent;
  const dataBase = [ ]
  const projects = currentProjects
  // console.log(projects)
  // projects.forEach(element => {
  //   let countTask = 0;
  //   let tasks = Object.values(element.tasks)
  //   let finalTasks = []
  //   tasks.forEach(task=>{
  //     const newTask = {
  //       TaskID:1,
  //       TaskName: task.taskName,
  //       StartDate:new Date(task.startDate*1000),
  //       Duration:task.duration,
  //       Progress:task.progress,
  //     }
  //     finalTasks.push(newTask)
  //   })
  //   console.log(finalTasks.length,'lista final de tareas')
  //   countTask++
  //   dataBase.push(
  //     {  
  //         TaskID: countTask,
  //         TaskName: element.projectName,
  //         StartDate: new Date(element.startDate * 1000),
  //         EndDate: new Date(element.endDate*1000),
  //         subtasks:finalTasks
  //    }
  //   )
  // });
  // console.log(dataBase.length,'asdfasd')

  
 
  let projectNames = [];  

        projects.forEach(project => {
         projectNames.push(project.projectName)
      });

      projects.forEach(element => {
        // console.log('agregando proyects')
        // let countTask = 0;
        // let tasks = []
        //   tasks =Object.values(element.subtasks)
        //   let finalTasks = []
        //   tasks.forEach(task=>{
        //     const newTask = {
        //       TaskID:1,
        //       TaskName: task.taskName,
        //       StartDate:new Date(task.startDate),
        //       Duration:task.duration,
        //       Progress:task.progress,
        //     }
        //       finalTasks.push(newTask)
            
        //   })
        //   countTask++
          dataBase.push(
            element
            // {   
            //   TaskID: countTask,
            //   TaskName: element.projectName,
            //   StartDate: new Date(element.startDate),
            //   EndDate: new Date(element.endDate),
            //   subtasks:finalTasks,
            // }
            )
        
      });
      console.log(dataBase,'Base de datos armada')


      
  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    showDeleteConfirmDialog: true,
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

  const workWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const labelValues = {
    // eslint-disable-next-line no-template-curly-in-string
    taskLabel: '${Progress}%'
  }

  const toolbarOptions = ['Edit', 'Delete', 'Cancel', 'Update', 'Search', 'Indent', 'Outdent'];
  
  const addProject= async () => {
    
    let dataProject = {
      TaskName: 'New Added Project',
      StartDate: new Date(),
      subtasks: [
        {}
      ]
    };
    ganttInstance.editModule.addRecord(dataProject);
    ganttInstance.editModule.dialogModule.openEditDialog();
    updateGraphicData()
}
const updateGraphicData =async ()=>{
  const updateData = ganttInstance.selectionModule.parent.flatData
  let projectList = [];
  let taskList = [];
  console.log(updateData,'update data')
  updateData.forEach(project => {
    if(project.parentUniqueID !== null){
      
      taskList.push(project)
    }else{
      projectList.push(project);
    }
  });
  projectList.forEach(project => {
    let taskProject = []
    taskList.forEach(task=>{
      if(task.parentUniqueID === project.uniqueID ){
        console.log('par')
        taskProject.push(task.taskData)
      }
    })
    project.subtasks = taskProject;
  });
  const finalProyectList = []
  projectList.forEach(project => {
    finalProyectList.push(project.taskData)
  });
    const q = await getDocs( collection(db, "developers"));
    q.forEach((developer)=>{
    if(developer.data().name === selectedDeveloper.name){
      const washingtonRef = doc(db, "developers", developer.id);
      updateDoc(washingtonRef, {
      projects: finalProyectList  
      });
  }

})
}

const addTask= () => {
  let dataTask = {
    TaskName: 'New Added Task', StartDate: new Date()
  };    
  ganttInstance.editModule.addRecord(dataTask, 'Child');
  var id = Math.max(...ganttInstance.ids);
  ganttInstance.editModule.dialogModule.openEditDialog(id);
  updateGraphicData()
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
        allowRowDragAndDrop={true}
        rowHeight={50}
        labelSettings={labelValues}
        splitterSettings={{position:"40%"}}
        workWeek={workWeek}
        selectedRowIndex={0}
        ref={gantt => ganttInstance = gantt}
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

export default GanttDiagram;