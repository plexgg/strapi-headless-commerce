/*
 *
 * Index
 *
 */

import { BaseHeaderLayout, ContentLayout } from '@strapi/design-system'
import React from 'react'

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
