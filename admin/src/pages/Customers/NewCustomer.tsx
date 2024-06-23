import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, GridItem } from '@strapi/design-system'
import { Plus } from '@strapi/icons'
import { useFormContext } from 'react-hook-form'
import * as yup from 'yup'

import customerRequests from '../../api/customer'
import { RHFTextArea, RHFTextField } from '../../components/HookForm'
import RHFComboBox from '../../components/HookForm/RHFComboBox'
import { Metadata } from '../../components/Metadata'
import {
  Accordion,
  AccordionGroup,
  withDrawerWizard,
} from '../../components/Wizard'
import { Customer } from '../../types/customer'

// ----------------------------------------------------------------------

const defaultValues = {
  overview: {
    firstName: '',
    lastName: '',
    email: '',
  },
  address: {
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    state: '',
    zip: '',
  },
  note: '',
}

const schema = yup
  .object({
    overview: yup.object({
      firstName: yup.string().required(),
      lastName: yup.string(),
      email: yup.string().email(),
    }),
    address: yup.object({
      firstName: yup.string(),
      lastName: yup.string(),
      company: yup.string(),
      phone: yup.string(),
      address1: yup.string(),
      address2: yup.string(),
      city: yup.string(),
      country: yup.string(),
      state: yup.string(),
      zip: yup.string(),
    }),
    note: yup.string(),
  })
  .required()

const resolver = yupResolver(schema)

// ----------------------------------------------------------------------

const ActionsComponent = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  const { formState, getValues, reset } = useFormContext()
  const { isValid } = formState

  const addCustomer = async (data: Customer) => {
    const result = await customerRequests.addCustomer(data)
    if (result) {
      toggleDrawer()
      reset()
    }
  }

  const onSubmit = () => {
    const values = getValues()
    // flatten the data removing the first level of nesting
    const flattenedValues: Customer = Object.assign({}, values.overview)
    addCustomer(flattenedValues)
  }

  return (
    <Button startIcon={<Plus />} onClick={onSubmit} disabled={!isValid}>
      Publish
    </Button>
  )
}

// ----------------------------------------------------------------------

const NewCustomer = () => {
  return (
    <AccordionGroup defaultExpanded="overview">
      <Accordion
        id="overview"
        title="Customer Overview"
        description="Add general information about this customer."
      >
        <Grid gap={5}>
          <GridItem col={6}>
            <RHFTextField
              placeholder="Jane"
              label="First Name"
              name="overview.firstName"
            />
          </GridItem>

          <GridItem col={6}>
            <RHFTextField
              placeholder="Doe"
              label="Last Name"
              name="overview.lastName"
            />
          </GridItem>

          <GridItem col={12}>
            <RHFTextField
              placeholder="jane.doe@example.com"
              label="Email address"
              name="overview.email"
            />
          </GridItem>
        </Grid>
      </Accordion>

      <Accordion
        id="address"
        title="Address"
        description="Add the primary address information about this customer."
      >
        <Grid gap={5}>
          <GridItem col={6}>
            <RHFTextField
              placeholder="Jane"
              label="First Name"
              name="address.firstName"
            />
          </GridItem>

          <GridItem col={6}>
            <RHFTextField
              placeholder="Doe"
              label="Last Name"
              name="address.lastName"
            />
          </GridItem>

          <GridItem col={6}>
            <RHFTextField
              placeholder="Doe Inc."
              label="Company"
              name="address.company"
            />
          </GridItem>

          <GridItem col={6}>
            <RHFTextField
              placeholder="555-555-5555"
              label="Phone"
              name="address.phone"
            />
          </GridItem>

          <GridItem col={12}>
            <RHFTextField
              placeholder="123 Main St."
              label="Address 1"
              name="address.address1"
            />
          </GridItem>

          <GridItem col={12}>
            <RHFTextField
              placeholder="Apartment, suite, etc. (optional)"
              label="Address 2"
              name="address.address2"
            />
          </GridItem>

          <GridItem col={6}>
            <RHFTextField placeholder="City" label="City" name="address.city" />
          </GridItem>

          <GridItem col={6}>
            <RHFTextField
              placeholder="California"
              label="State"
              name="address.state"
            />
          </GridItem>

          <GridItem col={6}>
            <RHFComboBox
              placeholder="United States"
              label="Country"
              name="address.country"
              options={[
                {
                  label: 'United States',
                  value: 'US',
                },
                {
                  label: 'Canada',
                  value: 'CA',
                },
              ]}
            />
          </GridItem>

          <GridItem col={6}>
            <RHFTextField placeholder="90210" label="Zip" name="address.zip" />
          </GridItem>
        </Grid>
      </Accordion>

      <Accordion
        id="notes"
        title="Notes"
        description="Add any notes about this customer."
      >
        <Grid gap={5}>
          <GridItem col={12}>
            <RHFTextArea
              placeholder="Some notes about this customer."
              label="Note"
              name="note"
            />
          </GridItem>
        </Grid>
      </Accordion>

      <Metadata />
    </AccordionGroup>
  )
}

export default withDrawerWizard(
  NewCustomer,
  {
    defaultValues,
    resolver,
  },
  ActionsComponent,
)
