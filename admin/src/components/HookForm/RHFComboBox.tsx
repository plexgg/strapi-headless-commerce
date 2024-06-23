import React, { useState } from 'react'
// form
import { Controller, useFormContext } from 'react-hook-form'
// @strapi/design-system
import {
  Combobox,
  ComboboxOption,
  CreatableCombobox,
} from '@strapi/design-system'
import { handleErrorMessages } from '../../utils/handleErrorMessages'

// ----------------------------------------------------------------------

type Options = {
  value: string
  label: string
}

type Props = {
  name: string
  label: string
  placeholder?: string
  hint?: string
  required?: boolean
  options: Array<Options>
  autocomplete?: 'both' | 'list' | 'none'
}

export default function RHFComboBox({ name, ...other }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Combobox
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
            <ComboboxOption key={option.value} value={option.value}>
              {option.label}
            </ComboboxOption>
          ))}
        </Combobox>
      )}
    />
  )
}

export function RHFCreatableComboBox({ name, options, ...other }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const [comboOptions, setOptions] = useState<Array<Options>>(options)
        const onCreateOption = (value: string) => {
          setOptions((opt) => [
            ...opt,
            {
              label: value,
              value,
            },
          ])
          field.onChange(value)
        }

        return (
          <CreatableCombobox
            {...field}
            onCreateOption={onCreateOption}
            value={
              typeof field.value === 'number' && field.value === 0
                ? ''
                : field.value
            }
            error={handleErrorMessages(error)}
            {...other}
          >
            {comboOptions.map((option) => (
              <ComboboxOption key={option.value} value={option.value}>
                {option.label}
              </ComboboxOption>
            ))}
          </CreatableCombobox>
        )
      }}
    />
  )
}
