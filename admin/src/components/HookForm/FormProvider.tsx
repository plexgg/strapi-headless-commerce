/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

// form
import { FormProvider as Form, UseFormReturn } from 'react-hook-form'

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
  methods: UseFormReturn<any>
  onSubmit?: VoidFunction
}

export default function FormProvider({ children, onSubmit, methods }: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  )
}