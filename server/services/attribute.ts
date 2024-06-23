import { Strapi } from '@strapi/strapi'

const plugin = 'plugin::strapi-headless-commerce.attribute'

export default ({ strapi }: { strapi: Strapi }) => ({
  async find(query) {
    return await strapi.entityService?.findMany(plugin, query)
  },

  async delete(id) {
    return await strapi.entityService?.delete(plugin, id)
  },

  async create(data) {
    return await strapi.entityService?.create(plugin, { data })
  },

  async update(id, data) {
    return await strapi.entityService?.update(plugin, id, { data })
  },
})
