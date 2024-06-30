/*
 *
 * Channels
 *
 */
import React, { useEffect, useState } from 'react'

import channelRequests from '../../api/channel'
import { Table } from '../../components/Table'
import withLayout from '../../composed/Layout'
import { headers } from './utils/headers'

const Channels = () => {
  const [channels, setChannels] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
  }, [])

  return <Table headers={headers} rows={channels} isLoading={isLoading} />
}

export default withLayout(Channels, {
  title: 'Channels',
  actions: {
    label: 'Add channel',
    path: '/channels/create',
  },
})
