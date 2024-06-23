import { Headers } from '../../../components/Table'

export const headers: Array<Headers> = [
  {
    name: 'id',
    key: 'id',
    metadatas: {
      label: 'Id',
      sortable: true,
    },
  },
  {
    name: 'name',
    key: 'name',
    metadatas: {
      label: 'Channel Name',
      sortable: true,
    },
  },
  {
    name: 'slug',
    key: 'slug',
    metadatas: {
      label: 'Slug',
      sortable: true,
    },
  },
  {
    name: 'currency',
    key: 'currency',
    metadatas: {
      label: 'Currency',
      sortable: true,
    },
  },
  {
    name: 'defaultCountry',
    key: 'defaultCountry',
    metadatas: {
      label: 'Default Country',
      sortable: true,
    },
  },
]
