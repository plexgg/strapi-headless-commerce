/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'

import { Box, Button, Flex, VisuallyHidden } from '@strapi/design-system'
import { Cross } from '@strapi/icons'

export interface DrawerProps {
  open: boolean
  setOpen: (showModal: boolean) => void
  actions?: ({ toggleDrawer }: { toggleDrawer: () => void }) => JSX.Element
  children: ReactNode
}

export const Drawer = ({
  open,
  setOpen,
  actions: Actions,
  children,
  ...rest
}: DrawerProps) => {
  if (!open) return null

  return (
    <Flex
      background="neutral100"
      direction="column"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
      }}
      {...rest}
    >
      <Flex
        justifyContent="space-between"
        borderColor="neutral150"
        borderWidth="0 0 1px 0"
        borderStyle="solid"
        background="neutral100"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: 65,
          minHeight: 65,
          padding: '0 24px',
        }}
      >
        <Button
          variant="ghost"
          startIcon={<Cross />}
          onClick={() => setOpen(false)}
        >
          <VisuallyHidden>Go back</VisuallyHidden>
        </Button>

        <Box>{Actions && <Actions toggleDrawer={() => setOpen(!open)} />}</Box>
      </Flex>

      <Box width="1250px" height="100%" padding={10}>
        {children}
      </Box>
    </Flex>
  )
}
