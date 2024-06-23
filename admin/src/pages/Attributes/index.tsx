/*
 *
 * Attributes
 *
 */

import React, { useEffect, useState } from 'react'

import {
  BaseHeaderLayout,
  Breadcrumbs,
  Button,
  ContentLayout,
  Crumb,
  Link,
} from '@strapi/design-system'
import { ArrowLeft, Plus } from '@strapi/icons'
import attributeRequests from '../../api/attribute'
import { Table } from '../../components/Table'
import pluginId from '../../pluginId'
import NewAttributes from './NewAttributes'
import { attributeHeaders } from './utils/headers'

const Attributes = () => {
  const [attributes, setAttributes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showDrawer, setShowDrawer] = useState(false)

  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true)

    const data = await attributeRequests.getAllAttributes()
    setAttributes(data)
    setIsLoading(false)
  }

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchData()
    }
    fetchDataAsync()
  }, [showDrawer])

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
        primaryAction={
          <Button startIcon={<Plus />} onClick={() => setShowDrawer(true)}>
            Add an attribute
          </Button>
        }
        title="Attributes"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Configuration</Crumb>
            <Crumb>Attributes</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>
        <Table
          headers={attributeHeaders}
          rows={attributes}
          isLoading={isLoading}
        />
      </ContentLayout>

      <NewAttributes open={showDrawer} setOpen={setShowDrawer} />
    </>
  )
}

export default Attributes
