import { useEffect, useState } from 'react'

import productTypeRequests from '../../api/productType'
import { Table } from '../../components/Table'
import withLayout from '../../composed/Layout'
import { productTypesHeaders } from './utils/headers'

const ProductTypes = () => {
  const [productTypes, setProductTypes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
  }, [])

  return (
    <Table
      headers={productTypesHeaders}
      rows={productTypes}
      isLoading={isLoading}
    />
  )
}

export default withLayout(ProductTypes, {
  title: 'Product Types',
  actions: {
    label: 'Create Product Type',
    path: '/product-types/create',
  },
})
