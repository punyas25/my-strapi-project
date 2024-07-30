module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/projects/get-all-projects-data/:project_slug',
      handler: 'project.getAllProjects',
      config: {
        auth: false,
      },
    },
  ],
};
