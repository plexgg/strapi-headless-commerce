import React from 'react'
// form
import { Controller, useFormContext } from 'react-hook-form'
// @strapi/design-system
import { Checkbox } from '@strapi/design-system'
import { handleErrorMessages } from '../../utils/handleErrorMessages'

// ----------------------------------------------------------------------

type Props = {
  name: string
  label: string
  placeholder?: string
  hint?: string
  required?: boolean
}

export default function RHFCheckbox({ name, ...other }: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Checkbox {...field} error={handleErrorMessages(error)} {...other} />
      )}
    />
  )
}
