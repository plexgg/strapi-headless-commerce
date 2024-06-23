import React, { useState } from 'react'

import { Button, Grid, GridItem } from '@strapi/design-system'

import { Accordion } from '../Wizard'
import { SortableList } from './Sortable'

export type Metadata = {
  id: number
  name: string
  value: string | number
}

export const Metadata = () => {
  const [items, setItems] = useState<Array<number>>([])
  const [values, setValues] = useState<Array<Metadata>>([])

  const addItem = () => {
    setItems([...items, items.length])
    setValues([
      ...values,
      {
        id: values.length,
        name: '',
        value: '',
      },
    ])
  }

  const onChange = (id: number, name: string, value: string | number) => {
    const newValues = [...values]
    newValues[id] = { ...values[id], [name]: value }
    setValues(newValues)
  }

  const updateItems = (payload: { oldIndex: number; newIndex: number }) => {
    const reorderedItems = [...items]
    reorderedItems.splice(
      payload.newIndex,
      0,
      reorderedItems.splice(payload.oldIndex, 1)[0],
    )
    setItems(reorderedItems)
  }

  return (
    <>
      <Accordion
        id="metadata"
        title="Metadata"
        description="Add metadata for this attribute."
        action={<Button onClick={addItem}>Assign value</Button>}
      >
        <Grid gap={5}>
          <GridItem col={12}>
            <SortableList
              items={items}
              values={values}
              onInputChange={onChange}
              onSortEnd={updateItems}
            />
          </GridItem>
        </Grid>
      </Accordion>
    </>
  )
}
