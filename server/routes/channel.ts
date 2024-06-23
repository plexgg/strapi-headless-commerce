export default [
  {
    method: 'GET',
    path: '/channels',
    handler: 'channel.find',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/channel',
    handler: 'channel.create',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'DELETE',
    path: '/channel/:id',
    handler: 'channel.delete',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'PUT',
    path: '/channel/update/:id',
    handler: 'channel.update',
    config: {
      policies: [],
      auth: false,
    },
  },
]
