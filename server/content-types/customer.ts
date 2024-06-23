/**
 * Customer Collection Type
 */

export default {
  schema: {
    kind: 'collectionType',
    collectionName: 'customers',
    info: {
      singularName: 'customer',
      pluralName: 'customers',
      displayName: 'Customer',
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
      firstName: {
        type: 'string',
        required: true,
        minLength: 2,
      },
      lastName: {
        type: 'string',
        minLength: 2,
      },
      email: {
        type: 'email',
        unique: true,
      },
      notes: {
        type: 'text',
      },
    },
  },
}
