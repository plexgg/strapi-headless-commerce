import { ReactNode } from 'react'

import pluginId from '../../pluginId'
import Attributes from '../Attributes'
import AttributesCreate from '../Attributes/Create'
import Channels from '../Channels'
import Configuration from '../Configuration'
import Customers from '../Customers'
import Discounts from '../Discounts'
import GiftCards from '../GiftCards'
import Index from '../Index'
import Orders from '../Orders'
import Pricing from '../Pricing'
import ProductTypes from '../ProductTypes'
import ProductTypesCreate from '../ProductTypes/Create'
import Products from '../Products'
import Shipping from '../Shipping'
import Taxes from '../Taxes'
import Warehouses from '../Warehouses'

type Route = {
  path: string
  component: ReactNode
  exact?: boolean
}

const prefix = `/plugins/${pluginId}`

export const ROUTES: Route[] = [
  {
    path: prefix,
    component: Index,
    exact: true,
  },
  {
    path: `${prefix}/orders`,
    component: Orders,
    exact: true,
  },
  {
    path: `${prefix}/products`,
    component: Products,
    exact: true,
  },
  {
    path: `${prefix}/customers`,
    component: Customers,
    exact: true,
  },
  {
    path: `${prefix}/discounts`,
    component: Discounts,
    exact: true,
  },
  {
    path: `${prefix}/gift-cards`,
    component: GiftCards,
    exact: true,
  },
  {
    path: `${prefix}/pricing`,
    component: Pricing,
    exact: true,
  },
  {
    path: `${prefix}/configuration`,
    component: Configuration,
    exact: true,
  },
  {
    path: `${prefix}/attributes`,
    component: Attributes,
    exact: true,
  },
  {
    path: `${prefix}/attributes/create`,
    component: AttributesCreate,
    exact: true,
  },
  {
    path: `${prefix}/product-types`,
    component: ProductTypes,
    exact: true,
  },
  {
    path: `${prefix}/product-types/create`,
    component: ProductTypesCreate,
    exact: true,
  },
  {
    path: `${prefix}/taxes`,
    component: Taxes,
    exact: true,
  },
  {
    path: `${prefix}/shipping-methods`,
    component: Shipping,
    exact: true,
  },
  {
    path: `${prefix}/warehouses`,
    component: Warehouses,
    exact: true,
  },
  {
    path: `${prefix}/channels`,
    component: Channels,
    exact: true,
  },
]
