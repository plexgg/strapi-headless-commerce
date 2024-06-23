import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, GridItem } from '@strapi/design-system'
import * as yup from 'yup'

import { RHFTextField } from '../../components/HookForm'
import RHFComboBox from '../../components/HookForm/RHFComboBox'
import { Metadata } from '../../components/Metadata'
import { SortableTable } from '../../components/Table/Sortable'
import {
  Accordion,
  AccordionGroup,
  withDrawerWizard,
} from '../../components/Wizard'

const defaultValues = {
  title: '',
  subtitle: '',
  handle: '',
  material: '',
  description: '',
}

const schema = yup
  .object({
    name: yup.string().required(),
    taxClass: yup.string(),
  })
  .required()

const resolver = yupResolver(schema)

const NewProductTypes = () => {
  return (
    <AccordionGroup defaultExpanded="general">
      <Accordion
        id="general"
        title="General information"
        description="Add general information about this attribute."
      >
        <Grid gap={5}>
          <GridItem col={12}>
            <RHFTextField placeholder="Record" label="Type name" name="name" />
          </GridItem>

          <GridItem col={12}>
            <RHFComboBox
              label="Tax class"
              name="taxClass"
              options={[
                {
                  label: 'No Tax',
                  value: 'no-tax',
                },
              ]}
            />
          </GridItem>
        </Grid>
      </Accordion>

      <Accordion
        id="attributes"
        title="Product Attributes"
        description="Add attributes to this product type."
        action={<Button>Assign value</Button>}
      >
        <Grid gap={5}>
          <GridItem col={12}>
            <SortableTable
              headers={[
                {
                  key: 'value',
                  name: 'value',
                  metadatas: {
                    sortable: true,
                    label: 'Value',
                  },
                },
              ]}
              rows={[
                {
                  value: 'test',
                },
                {
                  value: 'test2',
                },
                {
                  value: 'test3',
                },
                {
                  value: 'test4',
                },
              ]}
            />
          </GridItem>
        </Grid>
      </Accordion>

      <Metadata />
    </AccordionGroup>
  )
}

export default withDrawerWizard(NewProductTypes, {
  defaultValues,
  resolver,
})
