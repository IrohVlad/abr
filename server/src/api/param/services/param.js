'use strict';

/**
 * param service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::param.param');
