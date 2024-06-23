import React from 'react'

import { Cog, PriceTag, Scissors, ShoppingCart, User } from '@strapi/icons'

export type ILink = {
  label: string
  icon?: React.ReactNode
  to?: string
  active?: boolean
  items?: Array<ILink>
}

export const LINKS: Array<ILink> = [
  {
    label: 'Store',
    items: [
      {
        label: 'Products',
        icon: <PriceTag />,
        to: '/products',
        active: true,
      },
      {
        label: 'Orders',
        icon: <ShoppingCart />,
        to: '/orders',
      },
      {
        label: 'Customers',
        icon: <User />,
        to: '/customers',
      },
      {
        label: 'Discounts',
        icon: <Scissors />,
        to: '/discounts',
      },
    ],
  },
  {
    label: 'Configuration',
    icon: <Cog />,
    to: '/configuration',
  },
]
