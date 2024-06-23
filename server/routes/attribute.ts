export default [
  {
    method: 'GET',
    path: '/attributes',
    handler: 'attribute.find',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/attribute',
    handler: 'attribute.create',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'DELETE',
    path: '/attribute/:id',
    handler: 'attribute.delete',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'PUT',
    path: '/attribute/update/:id',
    handler: 'attribute.update',
    config: {
      policies: [],
      auth: false,
    },
  },
]
