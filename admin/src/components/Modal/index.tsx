import React, { SyntheticEvent } from 'react'

import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalLayout,
  Typography,
} from '@strapi/design-system'

type ModalProps = {
  title: string
  open: boolean
  setOpen: (showModal: boolean) => void
  action: {
    label: string
    fn: () => Promise<void> | void
  }
  children: React.ReactNode
}

export const Modal = ({
  title,
  open,
  setOpen,
  action,
  children,
}: ModalProps) => {
  const handleSubmit = async (e: SyntheticEvent) => {
    // Prevent submitting parent form
    e.preventDefault()
    e.stopPropagation()

    try {
      await action.fn()
      setOpen(false)
    } catch (e) {
      console.log('error', e)
    }
  }

  if (!open) return null

  return (
    <ModalLayout
      onClose={() => setOpen(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          {title}
        </Typography>
      </ModalHeader>

      <ModalBody>{children}</ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setOpen(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">{action.label}</Button>}
      />
    </ModalLayout>
  )
}
