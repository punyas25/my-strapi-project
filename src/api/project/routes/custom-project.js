module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/projects/get-all-projects-data/',
      handler: 'project.getAllProjects',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/projects/get-project-info/:project_slug',
      handler: 'project.getProjectInfo',
      config: {
        auth: false,
      },
    },
  ],
};
