import React from 'react'

import { PriceTag } from '@strapi/icons'

export type IConfiguration = {
  label: string
  items: Array<{
    title: string
    subtitle: string
    icon: React.ReactNode
    to: string
  }>
}

export const CONFIGS: Array<IConfiguration> = [
  {
    label: 'Attributes and Product Types',
    items: [
      {
        title: 'Attributes',
        subtitle: 'Attributes are used to describe a product.',
        icon: <PriceTag />,
        to: '/attributes',
      },
      {
        title: 'Product Types',
        subtitle: 'Product types are used to group products.',
        icon: <PriceTag />,
        to: '/product-types',
      },
    ],
  },
  {
    label: 'Product Settings',
    items: [
      {
        title: 'Taxes',
        subtitle: 'Configure your tax rates.',
        icon: <PriceTag />,
        to: '/taxes',
      },
    ],
  },
  {
    label: 'Shipping Settings',
    items: [
      {
        title: 'Shipping Methods',
        subtitle: 'Configure your shipping methods.',
        icon: <PriceTag />,
        to: '/shipping-methods',
      },
      {
        title: 'Warehouses',
        subtitle: 'Configure your warehouses.',
        icon: <PriceTag />,
        to: '/warehouses',
      },
    ],
  },
  {
    label: 'Multichannel',
    items: [
      {
        title: 'Channels',
        subtitle: 'Configure your channels.',
        icon: <PriceTag />,
        to: '/channels',
      },
    ],
  },
]
