module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/project-images/get-all-projects-data',
        handler: 'project-image.getAllProjectImages',
        config: {
          auth: false,
        },
      },
    ],
  };
  