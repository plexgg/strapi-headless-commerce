import { request } from '@strapi/helper-plugin'
import { type Attribute } from '../types/attribute'

const attributeRequests = {
  getAllAttributes: async () => {
    const response = await request('/strapi-headless-commerce/attributes', {
      method: 'GET',
    })
    return response
  },

  addAttribute: async (data: Attribute) => {
    const response = await request('/strapi-headless-commerce/attribute', {
      method: 'POST',
      body: data,
    })
    return response
  },

  deleteAttribute: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/attribute/${id}`, {
      method: 'DELETE',
    })
    return response
  },

  updateAttribute: async (id: string, data: Partial<Attribute>) => {
    const response = await request(`/strapi-headless-commerce/attribute/update/${id}`, {
      method: 'PUT',
      body: data,
    })
    return response
  },

  toggleAttribute: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/attribute/${id}`, {
      method: 'PUT',
    })
    return response
  },

  getAttribute: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/attribute/${id}`, {
      method: 'GET',
    })
    return response
  },
}

export default attributeRequests
