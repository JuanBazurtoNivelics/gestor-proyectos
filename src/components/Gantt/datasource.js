const data = [
  {
    TaskID: 1,
    TaskName: "Project Estimation",
    StartDate: new Date("12/06/2021"),
    EndDate: new Date("12/21/2021"),
    subtasks: [
      {
        TaskID: 2,
        TaskName: "Develop floor plan for estimation",
        StartDate: new Date("12/08/2021"),
        Duration: 3,
        Progress: 50,
      },
    ],
  },
];

export { data };
