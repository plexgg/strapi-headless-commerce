/**
 *
 * This component is the skeleton around the actual s, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'

import { Box, Layout } from '@strapi/design-system'
import { AnErrorOccurred } from '@strapi/helper-plugin'
import { Route, Switch } from 'react-router-dom'

import SideNav from '../../components/SideNav'
import pluginId from '../../pluginId'
import Attributes from '../Attributes'
import Channels from '../Channels'
import Configuration from '../Configuration'
import Customers from '../Customers'
import Discounts from '../Discounts'
import GiftCards from '../GiftCards'
import Index from '../Index'
import Orders from '../Orders'
import Pricing from '../Princing'
import ProductTypes from '../ProductTypes'
import Products from '../Products'
import Shipping from '../Shipping'
import Taxes from '../Taxes'
import Warehouses from '../Warehouses'

const App = () => {
  return (
    <Layout sideNav={<SideNav />}>
      <Box style={{ position: 'relative' }}>
        <Switch>
          <Route path={`/plugins/${pluginId}`} component={Index} exact />

          <Route
            path={`/plugins/${pluginId}/orders`}
            component={Orders}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/products`}
            component={Products}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/customers`}
            component={Customers}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/discounts`}
            component={Discounts}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/gift-cards`}
            component={GiftCards}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/pricing`}
            component={Pricing}
            exact
          />

          <Route
            path={`/plugins/${pluginId}/configuration`}
            component={Configuration}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/attributes`}
            component={Attributes}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/product-types`}
            component={ProductTypes}
            exact
          />
          <Route path={`/plugins/${pluginId}/taxes`} component={Taxes} exact />
          <Route
            path={`/plugins/${pluginId}/shipping-methods`}
            component={Shipping}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/warehouses`}
            component={Warehouses}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/channels`}
            component={Channels}
            exact
          />

          <Route component={AnErrorOccurred} />
        </Switch>
      </Box>
    </Layout>
  )
}

export default App
