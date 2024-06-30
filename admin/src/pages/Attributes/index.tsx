/*
 *
 * Attributes
 *
 */
import React, { useEffect, useState } from 'react'

import attributeRequests from '../../api/attribute'
import { Table } from '../../components/Table'
import withLayout from '../../composed/Layout'
import { attributeHeaders } from './utils/headers'

const Attributes = () => {
  const [attributes, setAttributes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
  }, [])

  return (
    <Table headers={attributeHeaders} rows={attributes} isLoading={isLoading} />
  )
}

export default withLayout(Attributes, {
  title: 'Attributes',
  actions: {
    label: 'Create an attribute',
    path: '/attributes/create',
  },
})
