/*
 *
 * ProductTypes
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
import productTypeRequests from '../../api/productType'
import { Table } from '../../components/Table'
import pluginId from '../../pluginId'
import NewProductTypes from './NewProductTypes'
import { productTypesHeaders } from './utils/headers'

const ProductTypes = () => {
  const [productTypes, setProductTypes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showDrawer, setShowDrawer] = useState(false)

  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true)

    const data = await productTypeRequests.getAllProductTypes()
    setProductTypes(data)
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
            Add a product type
          </Button>
        }
        title="ProductTypes"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Configuration</Crumb>
            <Crumb>Product Types</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>
        <Table
          headers={productTypesHeaders}
          rows={productTypes}
          isLoading={isLoading}
        />
      </ContentLayout>

      <NewProductTypes open={showDrawer} setOpen={setShowDrawer} />
    </>
  )
}

export default ProductTypes
