/**
 * Attribute Collection Type
 */

export default {
  schema: {
    kind: 'collectionType',
    collectionName: 'attributes',
    info: {
      singularName: 'attribute',
      pluralName: 'attributes',
      displayName: 'Attribute',
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
      code: {
        type: 'string',
        minLength: 2,
      },
      inputType: {
        type: 'enumeration',
        enum: [
          'dropdown',
          'multiple-select',
          'plain-text',
          'rich-text',
          'numeric',
          'boolean',
          'date',
          'datetime',
          'swatch',
        ],
        required: true,
      },
      values: {
        type: 'json',
        required: true,
      },
    },
  },
}
