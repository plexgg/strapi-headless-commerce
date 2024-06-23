/*
 *
 * Channels
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
import channelRequests from '../../api/channel'
import { Table } from '../../components/Table'
import pluginId from '../../pluginId'
import NewChannel from './NewChannel'
import { headers } from './utils/headers'

const Channels = () => {
  const [channels, setChannels] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showDrawer, setShowDrawer] = useState(false)

  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true)

    const customers = await channelRequests.getAllChannels()
    setChannels(customers)
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
            Add a channel
          </Button>
        }
        title="Channels"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Configuration</Crumb>
            <Crumb>Channels</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>
        <Table headers={headers} rows={channels} isLoading={isLoading} />
      </ContentLayout>

      <NewChannel setOpen={setShowDrawer} open={showDrawer} />
    </>
  )
}

export default Channels
