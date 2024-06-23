/* eslint-disable @typescript-eslint/no-explicit-any */
import { DynamicTable } from '@strapi/helper-plugin'
import React from 'react'

import TableRows from './TableRows'

export type Headers = {
  name: string
  cellFormatter?: (
    value: string,
    row?: {
      [key: string]: any
    },
  ) => JSX.Element | string
  key: string
  metadatas: {
    label: string
    sortable?: boolean
  }
}

export type Table = {
  headers: Array<Headers>
  rows: Array<any>
  isLoading: boolean
}

export const Table = ({ headers, rows, isLoading }: Table) => {
  return (
    <DynamicTable
      headers={headers}
      rows={rows}
      withBulkActions
      isLoading={isLoading}
    >
      <TableRows headers={headers} rows={rows} />
    </DynamicTable>
  )
}
