export default [
  {
    method: 'GET',
    path: '/customers',
    handler: 'customer.find',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/customer',
    handler: 'customer.create',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'DELETE',
    path: '/customer/:id',
    handler: 'customer.delete',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'PUT',
    path: '/customer/update/:id',
    handler: 'customer.update',
    config: {
      policies: [],
      auth: false,
    },
  },
]
