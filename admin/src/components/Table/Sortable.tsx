/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

import { Tbody, Td, Tr, Typography } from '@strapi/design-system'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

import { Headers } from '.'

type SortableTrProps = {
  children: React.ReactNode
}

const SortableTr = SortableElement(({ children }: SortableTrProps) => (
  <Tr>{children}</Tr>
)) as unknown as React.FC<SortableTrProps>

type SortableTbodyProps = {
  onSortEnd: any
  children: React.ReactNode
}

const SortableTbody = SortableContainer(({ children }: SortableTbodyProps) => (
  <Tbody>{children}</Tbody>
)) as unknown as React.FC<SortableTbodyProps>

type SortableTableProps = {
  headers: Array<Headers>
  rows: Array<any>
}

type CellValueProps = {
  type: string
  value: string
  model: string
}

export const SortableTable = ({ headers, rows }: SortableTableProps) => {
  const [organizedRows, setOrganizedRows] = useState<Array<any>>(rows)

  const getCellValue = ({ type, value, model }: CellValueProps) => {
    return value || '-'
  }

  const reorganizeRows = ({ oldIndex, newIndex }: any) => {
    console.log({ oldIndex, newIndex })
    const newRows = [...organizedRows]
    const [removed] = newRows.splice(oldIndex, 1)
    newRows.splice(newIndex, 0, removed)

    setOrganizedRows(newRows)
  }

  return (
    // <DynamicTable headers={headers} rows={organizedRows} isLoading={false}>
    <SortableTbody onSortEnd={reorganizeRows}>
      {rows.map((row, index) => (
        <SortableTr key={index}>
          {headers.map(({ key, name, cellFormatter }, i) => {
            return (
              <Td key={key} style={{ height: 80 }}>
                <Typography textColor="neutral800">
                  {getCellValue({
                    type: key,
                    value: cellFormatter
                      ? cellFormatter(row[name], row)
                      : row[name],
                    model: row.payload?.model,
                  })}
                </Typography>
              </Td>
            )
          })}
        </SortableTr>
      ))}
    </SortableTbody>
    // </DynamicTable>
  )
}
