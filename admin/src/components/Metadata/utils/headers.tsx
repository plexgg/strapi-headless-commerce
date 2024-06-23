import React, { ChangeEvent } from 'react'

import { Box, TextInput } from '@strapi/design-system'
import { Headers } from '../../Table'

export const headers: (
  onChange: (id: number, name: string, value: string | number) => void,
) => Array<Headers> = (onChange) => [
  {
    name: 'id',
    key: 'id',
    cellFormatter: (value: string) => value.toString(),
    metadatas: {
      label: 'Id',
      sortable: true,
    },
  },
  {
    key: 'name',
    name: 'name',
    cellFormatter: (value: string, row) => (
      <Box marginTop={4} marginBottom={4}>
        <TextInput
          key={`name-${row?.id}`}
          aria-label={`name-${row?.id}`}
          value={value || ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(row?.id, 'name', e.target.value)
          }
        />
      </Box>
    ),
    metadatas: {
      label: 'Name',
      sortable: false,
    },
  },
  {
    key: 'value',
    name: 'value',
    cellFormatter: (value: string, row) => (
      <Box marginTop={4} marginBottom={4}>
        <TextInput
          key={`value-${row?.id}`}
          aria-label={`value-${row?.id}`}
          value={value || ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(row?.id, 'value', e.target.value)
          }
        />
      </Box>
    ),
    metadatas: {
      label: 'Value',
      sortable: false,
    },
  },
]
