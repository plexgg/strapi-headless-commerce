/*
 *
 * Discounts
 *
 */

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
import React, { useState } from 'react'
import { Table } from '../../components/Table'

const Discounts = () => {
  const [discounts, setDiscounts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <>
      <BaseHeaderLayout
        navigationAction={
          <Link startIcon={<ArrowLeft />} to="/plugins/strapi-headless-commerce">
            Go back
          </Link>
        }
        primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>}
        title="Discounts"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Discounts</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>
        <Stack spacing={4} horizontal paddingBottom={4}>
          <Box color="neutral800">
            <Button variant="tertiary" size="L">
              Discounts
            </Button>
          </Box>
          <Box color="neutral800">
            <Button variant="ghost" size="L">
              Vouchers
            </Button>
          </Box>
        </Stack>

        <Table headers={[]} rows={discounts} isLoading={isLoading} />
      </ContentLayout>
    </>
  )
}

export default Discounts
