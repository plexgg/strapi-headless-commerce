/*
 *
 * Customers
 *
 */

import {
  BaseHeaderLayout,
  Breadcrumbs,
  Button,
  ContentLayout,
  Crumb,
  Link,
} from '@strapi/design-system'
import { ArrowLeft, Plus } from '@strapi/icons'
import React, { useEffect, useState } from 'react'
import customerRequests from '../../api/customer'
import { Table } from '../../components/Table'
import NewCustomer from './NewCustomer'
import { headers } from './utils/headers'

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showDrawer, setShowDrawer] = useState(false)

  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true)

    const customers = await customerRequests.getAllCustomers()
    setCustomers(customers)
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
          <Link startIcon={<ArrowLeft />} to="/plugins/strapi-headless-commerce">
            Go back
          </Link>
        }
        primaryAction={
          <Button startIcon={<Plus />} onClick={() => setShowDrawer(true)}>
            Add a customer
          </Button>
        }
        title="Customers"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Customers</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>
        <Table headers={headers} rows={customers} isLoading={isLoading} />
      </ContentLayout>

      <NewCustomer setOpen={setShowDrawer} open={showDrawer} />
    </>
  )
}

export default Customers
