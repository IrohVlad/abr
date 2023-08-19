'use strict';

/**
 * param-value service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::param-value.param-value');
