import { request } from '@strapi/helper-plugin'
import { type ProductType } from '../types/productType'

const productTypeRequests = {
  getAllProductTypes: async () => {
    const response = await request('/strapi-headless-commerce/product_types', {
      method: 'GET',
    })
    return response
  },

  addProductType: async (data: ProductType) => {
    const response = await request('/strapi-headless-commerce/product_type', {
      method: 'POST',
      body: data,
    })
    return response
  },

  deleteProductType: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/product_type/${id}`, {
      method: 'DELETE',
    })
    return response
  },

  updateProductType: async (id: string, data: Partial<ProductType>) => {
    const response = await request(`/strapi-headless-commerce/product_type/update/${id}`, {
      method: 'PUT',
      body: data,
    })
    return response
  },

  toggleProductType: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/product_type/${id}`, {
      method: 'PUT',
    })
    return response
  },

  getProductType: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/product_type/${id}`, {
      method: 'GET',
    })
    return response
  },
}

export default productTypeRequests
