/**
 * Product Type Collection Type
 */

export default {
  schema: {
    kind: 'collectionType',
    collectionName: 'product_types',
    info: {
      singularName: 'product-type',
      pluralName: 'product-types',
      displayName: 'Product Type',
    },
    options: {
      draftAndPublish: true,
    },
    pluginOptions: {},
    attributes: {
      name: {
        type: 'string',
        required: true,
        minLength: 2,
      },
      regular: {
        type: 'boolean',
        required: true,
      },
      productAttributes: {
        type: 'relation',
        relation: 'oneToMany',
        target: 'plugin::strapi-headless-commerce.attribute',
      },
      variantAttributes: {
        type: 'relation',
        relation: 'oneToMany',
        target: 'plugin::strapi-headless-commerce.attribute',
      },
    },
  },
}
