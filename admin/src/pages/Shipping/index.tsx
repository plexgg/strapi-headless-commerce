/*
 *
 * Shipping
 *
 */

import React, { useState } from 'react'

import {
  BaseHeaderLayout,
  Breadcrumbs,
  Button,
  ContentLayout,
  Crumb,
  Link,
} from '@strapi/design-system'
import { ArrowLeft, Plus } from '@strapi/icons'
import { Table } from '../../components/Table'
import pluginId from '../../pluginId'

const Shipping = () => {
  const [shipping, setShipping] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <>
      <BaseHeaderLayout
        navigationAction={
          <Link
            startIcon={<ArrowLeft />}
            to={`/plugins/${pluginId}/configuration`}
          >
            Go back
          </Link>
        }
        primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>}
        title="Shipping"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Configuration</Crumb>
            <Crumb>Shipping Methods</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>
        <Table headers={[]} rows={shipping} isLoading={isLoading} />
      </ContentLayout>
    </>
  )
}

export default Shipping
