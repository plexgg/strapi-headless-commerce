/*
 *
 * Taxes
 *
 */
import React from 'react'

import {
  BaseHeaderLayout,
  Box,
  Breadcrumbs,
  Button,
  ContentLayout,
  Crumb,
  Link,
  Stack,
} from '@strapi/design-system'
import { ArrowLeft, Plus } from '@strapi/icons'

import pluginId from '../../pluginId'

const Taxes = () => {
  return (
    <>
      <BaseHeaderLayout
        navigationAction={
          <Link
            startIcon={<ArrowLeft />}
            to={`/plugins/${pluginId}/configuration`}
          >
            Go back
          </Link>
        }
        primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>}
        title="Taxes"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Configuration</Crumb>
            <Crumb>Taxes</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>
        <Stack spacing={4} horizontal paddingBottom={4}>
          <Box color="neutral800">
            <Button variant="tertiary" size="L">
              Channels
            </Button>
          </Box>
          <Box color="neutral800">
            <Button variant="ghost" size="L">
              Countries
            </Button>
          </Box>
          <Box color="neutral800">
            <Button variant="ghost" size="L">
              Tas classes
            </Button>
          </Box>
        </Stack>
      </ContentLayout>
    </>
  )
}

export default Taxes
