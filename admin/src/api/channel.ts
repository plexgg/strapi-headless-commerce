import { request } from '@strapi/helper-plugin'

import { type Channel } from '../types/channel'

const channelRequests = {
  getAllChannels: async () => {
    const response = await request('/strapi-headless-commerce/channels', {
      method: 'GET',
    })
    return response
  },

  addChannel: async (data: Channel) => {
    const response = await request('/strapi-headless-commerce/channel', {
      method: 'POST',
      body: data,
    })
    return response
  },

  deleteChannel: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/channel/${id}`, {
      method: 'DELETE',
    })
    return response
  },

  updateChannel: async (id: string, data: Partial<Channel>) => {
    const response = await request(
      `/strapi-headless-commerce/channel/update/${id}`,
      {
        method: 'PUT',
        body: data,
      },
    )
    return response
  },

  toggleChannel: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/channel/${id}`, {
      method: 'PUT',
    })
    return response
  },

  getChannel: async (id: string) => {
    const response = await request(`/strapi-headless-commerce/channel/${id}`, {
      method: 'GET',
    })
    return response
  },
}

export default channelRequests
