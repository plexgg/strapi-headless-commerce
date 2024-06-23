import { Strapi } from '@strapi/strapi'

export default ({ strapi }: { strapi: Strapi }) => {
  const service = strapi.plugin('strapi-headless-commerce').service('customer')

  return {
    async find(ctx) {
      try {
        return await service.find(ctx.query)
      } catch (error) {
        ctx.throw(500, error)
      }
    },

    async delete(ctx) {
      try {
        ctx.body = await service.delete(ctx.params.id)
      } catch (err) {
        ctx.throw(500, err)
      }
    },

    async create(ctx) {
      const { body, headers } = ctx.request

      try {
        return await service.create(body, headers)
      } catch (error) {
        ctx.throw(500, error)
      }
    },

    async update(ctx) {
      try {
        ctx.body = await service.update(ctx.params.id, ctx.request.body)
      } catch (err) {
        ctx.throw(500, err)
      }
    }
  }
}
