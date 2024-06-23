import React from 'react'

// @strapi/design-system
import {
  Accordion,
  AccordionContent,
  AccordionToggle,
  Box,
} from '@strapi/design-system'
import { useAccordion } from '..'

// ----------------------------------------------------------------------

type AccordionProps = {
  id: string
  title: string
  description: string
  size?: 'S' | 'M'
  disabled?: boolean
  action?: React.ReactNode
  children: React.ReactNode
}

export const AccordionItem = ({
  id,
  title,
  description,
  size = 'M',
  action,
  disabled,
  children,
}: AccordionProps) => {
  const { expanded, handleToggle, formState } = useAccordion()

  if (disabled) return null

  return (
    <Accordion
      id={id}
      size={size}
      expanded={expanded.includes(id)}
      onToggle={handleToggle(id)}
      error={id ? Boolean(formState?.errors[id]) : undefined}
    >
      <AccordionToggle
        title={title}
        description={description}
        action={action}
        togglePosition="left"
      />
      <AccordionContent>
        <Box padding={6}>{children}</Box>
      </AccordionContent>
    </Accordion>
  )
}
