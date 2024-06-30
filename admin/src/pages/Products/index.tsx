/*
 *
 * Products
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
  Stack,
} from '@strapi/design-system'
import { ArrowLeft, Plus } from '@strapi/icons'

import { Modal } from '../../components/Modal'
import { Table } from '../../components/Table'
import NewProduct from './NewProduct'

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <>
      <BaseHeaderLayout
        navigationAction={
          <Link
            startIcon={<ArrowLeft />}
            to="/plugins/strapi-headless-commerce"
          >
            Go back
          </Link>
        }
        primaryAction={
          <Button startIcon={<Plus />} onClick={() => setShowDrawer(true)}>
            Add a product
          </Button>
        }
        title="Products"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Products</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>
        <Stack spacing={4} horizontal paddingBottom={4}>
          <Box color="neutral800">
            <Button variant="tertiary" size="L">
              Products
            </Button>
          </Box>
          <Box color="neutral800">
            <Button variant="ghost" size="L">
              Categories
            </Button>
          </Box>
          <Box color="neutral800">
            <Button variant="ghost" size="L">
              Collections
            </Button>
          </Box>
          <Box color="neutral800">
            <Button variant="ghost" size="L">
              Gift Cards
            </Button>
          </Box>
        </Stack>

        <Table headers={[]} rows={products} isLoading={isLoading} />
      </ContentLayout>

      <Modal
        title="Create a new product"
        open={showModal}
        setOpen={setShowModal}
        action={{
          label: 'Create',
          fn: () => Promise.resolve(),
        }}
      >
        <Box background="neutral100">Form</Box>
      </Modal>

      <NewProduct setOpen={setShowDrawer} open={showDrawer} />
    </>
  )
}

export default Products
