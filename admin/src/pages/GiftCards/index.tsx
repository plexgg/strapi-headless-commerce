/*
 *
 * GiftCards
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

const GiftCards = () => {
  return (
    <>
      <BaseHeaderLayout
        navigationAction={
          <Link startIcon={<ArrowLeft />} to="/plugins/strapi-headless-commerce">
            Go back
          </Link>
        }
        primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>}
        title="GiftCards"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Gift Cards</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>Gift Cards</ContentLayout>
    </>
  )
}

export default GiftCards
