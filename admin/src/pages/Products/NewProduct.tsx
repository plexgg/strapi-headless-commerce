import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, GridItem, Typography } from '@strapi/design-system'
import * as yup from 'yup'

import { RHFSelect, RHFTextArea, RHFTextField } from '../../components/HookForm'
import RHFSortable from '../../components/HookForm/RHFSortable'
import {
  Accordion,
  AccordionGroup,
  withDrawerWizard,
} from '../../components/Wizard'

const defaultValues = {
  general: {
    title: '',
    subtitle: '',
    handle: '',
    material: '',
    description: '',
  },
}

const schema = yup
  .object({
    general: yup.object({
      title: yup.string().required(),
      subtitle: yup.string(),
      handle: yup.string(),
      material: yup.string(),
      description: yup.string(),
    }),
  })
  .required()

const resolver = yupResolver(schema)

const NewProduct = () => {
  return (
    <AccordionGroup defaultExpanded="general">
      <Accordion
        id="general"
        title="General information"
        description="To start selling, all you need is a name and a price."
      >
        <Grid gap={5}>
          <GridItem col={6}>
            <RHFTextField
              placeholder="Winter Jacket"
              label="Title"
              name="general.title"
              hint="Give your product a short and clear title."
            />
            <Typography variant="pi" textColor="neutral600">
              50-60 characters is the recommended length for search engines.
            </Typography>
          </GridItem>
          <GridItem col={6}>
            <RHFTextField
              placeholder="Warm and cozy..."
              label="Subtitle"
              name="general.subtitle"
            />
          </GridItem>

          <GridItem col={6}>
            <RHFTextField
              placeholder="winter-jacket"
              label="Handle"
              name="general.handle"
            />
          </GridItem>
          <GridItem col={6}>
            <RHFTextField
              placeholder="100% Cotton"
              label="Material"
              name="general.material"
            />
          </GridItem>

          <GridItem col={12}>
            <RHFTextArea
              placeholder="A warm and cozy winter jacket..."
              label="Description"
              name="description"
              hint="Give your product a short and clear description."
            />
            <Typography variant="pi" textColor="neutral600">
              120-160 characters is the recommended length for search engines.
            </Typography>
          </GridItem>
        </Grid>
      </Accordion>

      <Accordion
        id="organize"
        title="Organize"
        description="To start selling, all you need is a name and a price."
      >
        <Grid gap={5}>
          <GridItem col={6}>
            <RHFSelect
              placeholder="Choose a type"
              label="Type"
              name="general.type"
              options={[]}
            />
          </GridItem>
          <GridItem col={6}>
            <RHFSelect
              placeholder="Choose a collection"
              label="Collection"
              name="general.collection"
              options={[]}
            />
          </GridItem>

          <GridItem col={12}>
            <RHFTextField label="Tags (comma separated)" name="general.tags" />
          </GridItem>
        </Grid>
      </Accordion>

      <Accordion
        id="variants"
        title="Variants"
        description="Add variations of this product."
      >
        <Grid gap={5}>
          <GridItem col={6}>test</GridItem>
        </Grid>
      </Accordion>

      <Accordion
        id="attributes"
        title="Attributes"
        description="Used for shipping and customs purposes."
      >
        <Grid gap={5}>
          <GridItem col={6}>test</GridItem>
        </Grid>
      </Accordion>

      <Accordion
        id="thumbnail"
        title="Thumbnail"
        description="Used to represent your product during checkout, social sharing and more."
      >
        <Grid gap={5}>
          <GridItem col={6}>test</GridItem>
        </Grid>
      </Accordion>

      <Accordion
        id="media"
        title="Media"
        description="Add images to your product."
      >
        <Grid gap={5}>
          <GridItem col={6}>test</GridItem>
        </Grid>
      </Accordion>

      <RHFSortable
        id="metadata"
        title="Metadata"
        description="Add metadata for this attribute."
      />
    </AccordionGroup>
  )
}

export default withDrawerWizard(NewProduct, {
  defaultValues,
  resolver,
})
