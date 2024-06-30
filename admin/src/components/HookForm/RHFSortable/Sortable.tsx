import React, { ChangeEvent } from 'react'

import { Stack, TextInput } from '@strapi/design-system'
import { Drag } from '@strapi/icons'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

import { type Metadata } from '.'

type SortableItemProps = {
  id: number
  values: Array<Metadata>
  index: number
  onChange: (id: number, name: string, value: string | number) => void
}

const SortableItem = SortableElement(
  ({ id, values, onChange }: SortableItemProps) => {
    const inputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(id, 'name', e.target.value)
    }

    const inputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(id, 'value', e.target.value)
    }

    return (
      <li style={{ listStyle: 'none' }}>
        <Stack spacing={4} horizontal background="secondary200" padding={3}>
          <Drag />
          <TextInput
            aria-label="name"
            placeholder="Name"
            autocomplete="off"
            value={values[id]?.name || ''}
            onChange={inputNameChange}
          />

          <TextInput
            aria-label="value"
            placeholder="Value"
            autocomplete="off"
            value={values[id]?.value || ''}
            onChange={inputValueChange}
          />
        </Stack>
      </li>
    )
  },
) as unknown as (props: SortableItemProps) => JSX.Element

type SortableListProps = {
  fields: Record<'id', string>[]
  values: Array<Metadata>
  onInputChange: (id: number, name: string, value: string | number) => void
  onSortEnd: (payload: { oldIndex: number; newIndex: number }) => void
}

export const SortableList = SortableContainer(
  ({ fields, values, onInputChange }: SortableListProps) => {
    return (
      <ul>
        {fields.map((_, index) => index).map((item, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            id={item}
            values={values}
            onChange={onInputChange}
          />
        ))}
      </ul>
    )
  },
) as unknown as (prosp: SortableListProps) => JSX.Element
