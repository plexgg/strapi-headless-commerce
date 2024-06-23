/**
 * Channel Collection Type
 */

export default {
  schema: {
    kind: 'collectionType',
    collectionName: 'channels',
    info: {
      singularName: 'channel',
      pluralName: 'channels',
      displayName: 'Channel',
    },
    options: {
      draftAndPublish: true,
    },
    pluginOptions: {
      'content-manager': {
        visible: true,
      },
      'content-type-builder': {
        visible: true,
      },
    },
    attributes: {
      name: {
        type: 'string',
        required: true,
        minLength: 2,
      },
      slug: {
        type: 'string',
        minLength: 2,
      },
      currency: {
        type: 'string',
        required: true,
      },
      defaultCountry: {
        type: 'text',
        required: true,
      },
    },
  },
}
