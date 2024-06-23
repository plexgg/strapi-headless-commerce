/*
 *
 * Orders
 *
 */

import React, { useState } from 'react'

import {
  BaseHeaderLayout,
  Box,
  Breadcrumbs,
  Button,
  ContentLayout,
  Crumb,
  Link,
  Typography,
} from '@strapi/design-system'
import { ArrowLeft, Plus } from '@strapi/icons'
import { Drawer } from '../../components/Drawer'
import { Modal } from '../../components/Modal'
import { Table } from '../../components/Table'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <>
      <BaseHeaderLayout
        navigationAction={
          <Link startIcon={<ArrowLeft />} to="/plugins/strapi-headless-commerce">
            Go back
          </Link>
        }
        primaryAction={
          <Button startIcon={<Plus />} onClick={() => setShowDrawer(true)}>
            Add an order
          </Button>
        }
        title="Orders"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Orders</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>
        <Table headers={[]} rows={orders} isLoading={isLoading} />
      </ContentLayout>

      <Modal
        title="Create an order"
        open={showModal}
        setOpen={setShowModal}
        action={{
          label: 'Create',
          fn: () => Promise.resolve(),
        }}
      >
        <Box background="neutral100">Form</Box>
      </Modal>

      <Drawer open={showDrawer} setOpen={setShowDrawer}>
        <Box padding={4}>
          <Typography>Hello world</Typography>
        </Box>
      </Drawer>
    </>
  )
}

export default Orders
