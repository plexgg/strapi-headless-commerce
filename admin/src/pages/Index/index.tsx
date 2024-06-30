/*
 *
 * Index
 *
 */
import React from 'react'

import { BaseHeaderLayout, ContentLayout } from '@strapi/design-system'

const Index = () => {
  return (
    <>
      <BaseHeaderLayout
        title="E-commerce"
        subtitle="Manage your e-commerce"
        as="h2"
      />

      <ContentLayout>test</ContentLayout>
    </>
  )
}

export default Index
