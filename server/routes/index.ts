import attribute from './attribute'
import channel from './channel'
import customer from './customer'
import productType from './productType'

export default [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  ...attribute,
  ...channel,
  ...customer,
  ...productType,
]
