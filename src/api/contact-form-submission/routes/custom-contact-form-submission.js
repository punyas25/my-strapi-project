module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact-form-submissions/save-submissions',
      handler: 'contact-form-submission.saveSubmissions',
      config: {
        auth: false,
      },
    }
  ],
};
