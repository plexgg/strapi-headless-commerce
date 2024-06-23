/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from 'react'
import { FormState } from 'react-hook-form'
// export
export { AccordionGroup } from './Group'
export { AccordionItem as Accordion } from './Item'

const AccordionContext = createContext<{
  expanded: Array<string>
  handleToggle: (id: string) => void
  formState?: FormState<any>
}>({
  expanded: [],
  handleToggle: () => {},
})

export const useAccordion = () => {
  const context = useContext(AccordionContext)
  if (context === undefined) {
    throw new Error('useAccordion must be used within a AccordionGroup')
  }
  return context
}

export const AccordionProvider = AccordionContext.Provider
