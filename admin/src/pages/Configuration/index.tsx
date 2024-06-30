/*
 *
 * Configuration
 *
 */
import React from 'react'

import {
  BaseHeaderLayout,
  Box,
  Breadcrumbs,
  ContentLayout,
  Crumb,
  Flex,
  Link,
  Typography,
} from '@strapi/design-system'
import { ContentBox } from '@strapi/helper-plugin'
import { ArrowLeft } from '@strapi/icons'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import pluginId from '../../pluginId'
import { CONFIGS } from '../../utils/configs'

const BlockLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  max-width: 300px;
  min-width: 300px;
`

const Configuration = () => {
  const history = useHistory()

  return (
    <>
      <BaseHeaderLayout
        navigationAction={
          <Link
            startIcon={<ArrowLeft />}
            to="/plugins/strapi-headless-commerce"
          >
            Go back
          </Link>
        }
        title="Configuration"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>Configuration</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>
        <Flex direction="row" justifyContent="center">
          <Box direction="column" width="1250px">
            {CONFIGS.map((config, i) => (
              <Flex key={i} direction="row" gap={5} marginBottom={10}>
                <Box width={'400px'}>
                  <Typography variant="beta">{config.label}</Typography>
                </Box>

                {config.items.map((item, x) => (
                  <BlockLink
                    key={x}
                    onClick={() =>
                      history.push(`/plugins/${pluginId + item.to}`)
                    }
                  >
                    <ContentBox
                      title={item.title}
                      subtitle={item.subtitle}
                      icon={item.icon}
                      iconBackground="primary100"
                    />
                  </BlockLink>
                ))}
              </Flex>
            ))}
          </Box>
        </Flex>
      </ContentLayout>
    </>
  )
}

export default Configuration
