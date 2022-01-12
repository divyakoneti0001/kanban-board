//Default data to be displayed if the localstorage has no data stored
const default_tasks = [
    {
      title: 'Backlog',
      id: 0,
      cards: [{
        taskText: 'Update the URL of app',
        taskHeader : 'URL Updation',
        listNumber: 0,
        timeId: 0
      }, 
      {
        taskText: 'Add background colour',
        taskHeader : 'Add bgColor',
        listNumber: 0,
        timeId: 1
      },
      {
        taskText: 'Update response in backend',
        taskHeader : 'Response updation',
        listNumber: 0,
        timeId: 1
      },
      {
        taskText: 'Add padding to table',
        taskHeader : 'Table alterations',
        listNumber: 0,
        timeId: 1
      },
      {
        taskText: 'Update admin rights in prod',
        taskHeader : 'Admin data',
        listNumber: 0,
        timeId: 1
      }
  
    ]
    },
    {
      title: 'To Do',
      id: 1,
      cards: [{
        taskText: 'Add icon to application',
        taskHeader : 'Icon addition',
        listNumber: 1,
        timeId: 2
      }, 
      {
        taskText: 'Add animation on scroll',
        taskHeader : 'Animation',
        listNumber: 1,
        timeId: 3
      }]
    },
    {
      title: 'In Progress',
      id: 2,
      cards: [{
        taskText: 'Update username of admin',
        taskHeader : 'Admin portal',
        listNumber: 2,
        timeId: 4
      }, 
      {
        taskText: 'Add ssh keys to server',
        taskHeader : 'Key addition',
        listNumber: 2,
        timeId: 5
      }]
    },
    {
      title: 'Completed',
      id: 3,
      cards: [{
        taskText: 'Removal of table stripes',
        taskHeader : 'Table updation',
        listNumber: 3,
        timeId: 6
      }, 
      {
        taskText: 'Update SQL queries in Dao class',
        taskHeader : 'Query update',
        listNumber: 3,
        timeId: 7
      }]
    },
    {
      title: 'Closed',
      id: 4,
      cards: [{
        taskText: 'Patch server to latest version',
        taskHeader : 'Server patch',
        listNumber: 4,
        timeId: 6
      }, 
      {
        taskText: 'Add load balancing to prod servers',
        taskHeader : 'Load balancing',
        listNumber: 4,
        timeId: 7
      }]
    }
  ]

export default default_tasks;