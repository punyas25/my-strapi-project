'use strict';

/**
 * feature controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::feature.feature', ({ strapi }) => ({
    async getAllFeaturedImages() {
        try {
          const featuredImages = await strapi.entityService.findMany('api::feature.feature', {
            populate: {
              image_src: {
                fields: ['url']
              }
            },
          });
          return featuredImages;
        } catch (error) {
          console.error('Error while fetching featured images:', error);
          throw error;
        }
      },
}));
