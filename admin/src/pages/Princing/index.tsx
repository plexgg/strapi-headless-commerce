/*
 *
 * Pricing
 *
 */

import {
  BaseHeaderLayout,
  Breadcrumbs,
  Button,
  ContentLayout,
  Crumb,
  Link,
} from '@strapi/design-system'
import { ArrowLeft, Plus } from '@strapi/icons'
import React from 'react'
import pluginId from '../../pluginId'

const Pricing = () => {
  return (
    <>
      <BaseHeaderLayout
        navigationAction={
          <Link startIcon={<ArrowLeft />} to={`/plugins/${pluginId}`}>
            Go back
          </Link>
        }
        primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>}
        title="Pricing"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Pricing</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>Pricing</ContentLayout>
    </>
  )
}

export default Pricing
