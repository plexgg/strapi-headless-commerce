import React, { ReactElement, useState } from 'react'

// @strapi/design-system
import { AccordionGroup as AccordionGroupDS } from '@strapi/design-system'
import { useFormContext } from 'react-hook-form'
import { AccordionProvider } from '..'
import { AccordionItem } from '../Item'

// ----------------------------------------------------------------------
type AccordionGroupProps = {
  defaultExpanded?: string
  children:
    | ReactElement<typeof AccordionItem | boolean>
    | Array<ReactElement<typeof AccordionItem>>
}

export const AccordionGroup = ({
  defaultExpanded,
  children,
}: AccordionGroupProps) => {
  const [expanded, setExpanded] = useState<Array<string>>(
    defaultExpanded ? [defaultExpanded] : [],
  )
  const methods = useFormContext()

  const { formState } = methods

  const handleToggle = (key: string) => () => {
    setExpanded((currentValue) => {
      if (currentValue.includes(key)) {
        return currentValue.filter((item) => item !== key)
      }

      return [...currentValue, key]
    })
  }

  return (
    <AccordionProvider value={{ expanded, handleToggle, formState }}>
      <AccordionGroupDS background="neutral150">{children}</AccordionGroupDS>
    </AccordionProvider>
  )
}
