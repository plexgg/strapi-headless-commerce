import { request } from '@strapi/helper-plugin'

import { type Customer } from '../types/customer'

const customerRequests = {
  getAllCustomers: async () => {
    const response = await request('/strapi-headless-commerce/customers', {
      method: 'GET',
    })
    return response
  },

  addCustomer: async (data: Customer) => {
    const response = await request('/strapi-headless-commerce/customer', {
      method: 'POST',
      body: data,
    })
    return response
  },

  deleteCustomer: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/customer/${id}`, {
      method: 'DELETE',
    })
    return response
  },

  updateCustomer: async (id: string, data: Partial<Customer>) => {
    const response = await request(
      `/strapi-headless-commerce/customer/update/${id}`,
      {
        method: 'PUT',
        body: data,
      },
    )
    return response
  },

  toggleCustomer: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/customer/${id}`, {
      method: 'PUT',
    })
    return response
  },

  getCustomer: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/customer/${id}`, {
      method: 'GET',
    })
    return response
  },
}

export default customerRequests
