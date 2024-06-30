/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import {
  Flex,
  IconButton,
  Tbody,
  Td,
  Tr,
  Typography,
} from '@strapi/design-system'
import { onRowClick, stopPropagation } from '@strapi/helper-plugin'
import { Eye } from '@strapi/icons'

import { Headers } from '..'

type Rows = {
  id: string
  [key: string]: any
}

type TableRowsProps<T extends object = Rows> = {
  headers: Array<Headers>
  rows: Array<T>
  onCellClick?: (id: string) => void
}

type CellValueProps = {
  type: string
  value: string
  model: string
}

const TableRows = ({ headers, rows, onCellClick }: TableRowsProps) => {
  const getCellValue = ({ type, value, model }: CellValueProps) => {
    return value || '-'
  }

  return (
    <Tbody>
      {rows.map((data) => {
        return (
          <Tr
            key={data.id}
            {...onRowClick({
              fn: () => (onCellClick ? onCellClick(data.id) : null),
            })}
          >
            {headers.map(({ key, name, cellFormatter }) => {
              return (
                <Td key={key}>
                  <Typography textColor="neutral800">
                    {getCellValue({
                      type: key,
                      value: cellFormatter
                        ? cellFormatter(data[name], data)
                        : data[name],
                      model: data.payload?.model,
                    })}
                  </Typography>
                </Td>
              )
            })}
            <Td {...stopPropagation}>
              <Flex justifyContent="end">
                <IconButton noBorder icon={<Eye />} />
              </Flex>
            </Td>
          </Tr>
        )
      })}
    </Tbody>
  )
}

export default TableRows
