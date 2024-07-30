'use strict';

/**
 * project-image controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project-image.project-image', ({ strapi }) => ({
  async getAllProjectImages() {
    try {
      const projectsData = await strapi.entityService.findMany('api::project-image.project-image', {
        fields: ['image_title'],
        populate: {
          image_src: {
            fields: ['url']
          }
        },
      });
      return projectsData;
    } catch (error) {
      console.error('Error while fetching project images:', error);
      throw error;
    }
  },
}));

