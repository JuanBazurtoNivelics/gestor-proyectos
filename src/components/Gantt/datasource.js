const data = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('12/06/2021'),
        EndDate: new Date('12/31/2021'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('12/06/2021'), Duration: 4, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('12/06/2021'), Duration: 4, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('12/06/2021'), Duration: 4, Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('12/06/2021'),
        EndDate: new Date('12/21/2021'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('12/08/2021'), Duration: 3, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('12/08/2021'), Duration: 3, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('12/08/2021'), Duration: 3, Progress: 50 }
        ]
    },
];

export {data};