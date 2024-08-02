'use strict';

/**
 * contact-form-submission controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-form-submission.contact-form-submission', ({ strapi }) => ({
  async saveSubmissions(ctx) {
    try {
      let requestBody = JSON.parse(ctx.request.body);

      const formData = {
        name: requestBody.fullname,
        email: requestBody.email,
        subject: requestBody.subject,
        message: requestBody.message,
        replied: false,
        publishedAt: Date.now(),
      }

      const resp = await strapi.entityService.create('api::contact-form-submission.contact-form-submission', {
        data: formData,
      })

      return resp;
    } catch (error) {
      console.error('Form Submission Error:', error);
      throw error;
    }
  }
}));

