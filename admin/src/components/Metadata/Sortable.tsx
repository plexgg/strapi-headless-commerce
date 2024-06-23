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
      <li>
        <Stack spacing={4} horizontal background="secondary200" padding={3}>
          <Drag />
          <TextInput
            aria-label="name"
            value={values[id]?.name || ''}
            onChange={inputNameChange}
          />

          <TextInput
            aria-label="value"
            value={values[id]?.value || ''}
            onChange={inputValueChange}
          />
        </Stack>
      </li>
    )
  },
) as unknown as (props: SortableItemProps) => JSX.Element

type SortableListProps = {
  items: Array<number>
  values: Array<Metadata>
  onInputChange: (id: number, name: string, value: string | number) => void
  onSortEnd: (payload: { oldIndex: number; newIndex: number }) => void
}

export const SortableList = SortableContainer(
  ({ items, values, onInputChange }: SortableListProps) => {
    return (
      <ul>
        {items.map((item, index) => (
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
