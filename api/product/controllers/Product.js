'use strict';

/**
 * Product.js controller
 *
 * @description: A set of functions called "actions" for managing `Product`.
 */

module.exports = {

  /**
   * Retrieve product records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.product.fetchAll(ctx.query);
  },

  /**
   * Retrieve a product record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.product.fetch(ctx.params);
  },

  /**
   * Create a/an product record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.product.add(ctx.request.body);
  },

  /**
   * Update a/an product record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.product.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an product record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.product.remove(ctx.params);
  }
};
