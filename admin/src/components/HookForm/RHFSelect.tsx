import React from 'react'
// form
import { Controller, useFormContext } from 'react-hook-form'
// @strapi/design-system
import { SingleSelect, SingleSelectOption } from '@strapi/design-system'
import { handleErrorMessages } from '../../utils/handleErrorMessages'

// ----------------------------------------------------------------------

type Props = {
  name: string
  label: string
  placeholder?: string
  hint?: string
  required?: boolean
  options: Array<{ value: string; label: string }>
  withTags?: boolean
}

export default function RHFSelect({ name, ...other }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <SingleSelect
          {...field}
          value={
            typeof field.value === 'number' && field.value === 0
              ? ''
              : field.value
          }
          error={handleErrorMessages(error)}
          {...other}
        >
          {other.options.map((option) => (
            <SingleSelectOption key={option.value} value={option.value}>
              {option.label}
            </SingleSelectOption>
          ))}
        </SingleSelect>
      )}
    />
  )
}
