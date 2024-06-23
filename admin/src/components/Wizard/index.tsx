/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { DefaultValues, Resolver, useForm } from 'react-hook-form'
import { Drawer, DrawerProps } from '../Drawer'
import FormProvider from '../HookForm/FormProvider'

export * from './Accordion'

export const withDrawerWizard = <T extends object = any>(
  Component: (props: T) => JSX.Element,
  form: {
    resolver?: Resolver<T>
    defaultValues?:
      | DefaultValues<Record<string, unknown>>
      | { [x: string]: object | undefined }
  },
  ActionsComponent?: ({
    toggleDrawer,
  }: {
    toggleDrawer: () => void
  }) => JSX.Element,
) => {
  return ({
    actions = ActionsComponent,
    ...props
  }: Omit<DrawerProps, 'children'>) => {
    const { resolver, defaultValues } = form

    const methods = useForm({
      defaultValues,
      resolver: resolver as any,
    })

    return (
      <FormProvider methods={methods}>
        <Drawer actions={actions} {...props}>
          <Component {...(props as T)} />
        </Drawer>
      </FormProvider>
    )
  }
}
