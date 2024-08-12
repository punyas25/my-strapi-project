module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/features/get-all-featured-images',
        handler: 'feature.getAllFeaturedImages',
        config: {
          auth: false,
        },
      },
    ],
  };
  