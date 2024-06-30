/**
 *
 * This component is the skeleton around the actual s, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
import { Box, Layout } from '@strapi/design-system'
import { AnErrorOccurred } from '@strapi/helper-plugin'
import { Route, Switch } from 'react-router-dom'

import SideNav from '../../components/SideNav'
import { ROUTES } from './routes'

const App = () => {
  return (
    <Layout sideNav={<SideNav />}>
      <Box style={{ position: 'relative' }}>
        <Switch>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}

          <Route component={AnErrorOccurred} />
        </Switch>
      </Box>
    </Layout>
  )
}

export default App
