export default [
  {
    method: 'GET',
    path: '/product_types',
    handler: 'product-type.find',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/product_type',
    handler: 'product-type.create',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'DELETE',
    path: '/product_type/:id',
    handler: 'product-type.delete',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'PUT',
    path: '/product_type/update/:id',
    handler: 'product-type.update',
    config: {
      policies: [],
      auth: false,
    },
  },
]
