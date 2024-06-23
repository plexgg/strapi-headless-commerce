import { Headers } from '../../../components/Table'

export const attributeHeaders: Array<Headers> = [
  {
    key: 'name',
    name: 'name',
    metadatas: {
      label: 'Name',
      sortable: false,
    },
  },
  {
    key: 'code',
    name: 'code',
    metadatas: {
      label: 'Code',
      sortable: false,
    },
  },
]

export const attributeValuesHeaders: Array<Headers> = [
  // {
  //   key: 'value',
  //   name: 'value',
  //   cellFormatter: (row: string) => row.toLocaleLowerCase(),
  //   metadatas: {
  //     label: 'Admin',
  //     sortable: false,
  //   },
  // },
  {
    key: 'value',
    name: 'value',
    metadatas: {
      label: 'Default Store View',
      sortable: false,
    },
  },
]
