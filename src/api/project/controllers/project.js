'use strict';

/**
 * project controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) => ({
  async getAllProjects(ctx) {
    try {
      const { project_slug } = ctx.params;
      const projectsData = await strapi.entityService.findMany('api::project.project', {
        fields: ['project_name', 'project_year', 'project_description', 'project_slug'],
        filters: {
          project_slug: project_slug,
        },
        populate: {
          cover_image: {
            fields: ['url'],
          },
          project_images: {
            populate: {
              image_src: {
                fields: ['url'],
              }
            },
          }
        },
      });
      return projectsData;
    } catch (error) {
      console.error('Error while fetching projects:', error);
      throw error;
    }
  },
}));
