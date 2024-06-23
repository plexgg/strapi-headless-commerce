/**
 * Product Collection Type
 */

export default {
  schema: {
    kind: 'collectionType',
    collectionName: 'products',
    info: {
      singularName: 'product',
      pluralName: 'products',
      displayName: 'Product',
    },
    options: {
      draftAndPublish: true,
    },
    pluginOptions: {
      i18n: {
        localized: true,
      },
      'content-manager': {
        visible: true,
      },
      'content-type-builder': {
        visible: true,
      },
    },
    attributes: {
      handle: {
        pluginOptions: {
          i18n: {
            localized: true,
          },
        },
        type: 'uid',
        required: false,
      },
      title: {
        pluginOptions: {
          i18n: {
            localized: true,
          },
        },
        type: 'string',
        required: true,
        unique: true,
      },
      description: {
        pluginOptions: {
          i18n: {
            localized: true,
          },
        },
        type: 'text',
        required: true,
      },
      length: {
        pluginOptions: {
          i18n: {
            localized: false,
          },
        },
        type: 'integer',
      },
      images: {
        allowedTypes: ['images', 'videos'],
        type: 'media',
        multiple: true,
        pluginOptions: {
          i18n: {
            localized: true,
          },
        },
      },
    },
  },
}
