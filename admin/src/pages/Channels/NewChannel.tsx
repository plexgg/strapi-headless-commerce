import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, GridItem } from '@strapi/design-system'
import { Plus } from '@strapi/icons'
import { useFormContext } from 'react-hook-form'
import * as yup from 'yup'

import channelRequests from '../../api/channel'
import { RHFTextField } from '../../components/HookForm'
import RHFComboBox from '../../components/HookForm/RHFComboBox'
import {
  Accordion,
  AccordionGroup,
  withDrawerWizard,
} from '../../components/Wizard'
import { type Channel } from '../../types/channel'

// ----------------------------------------------------------------------

const defaultValues = {
  general: {
    name: '',
    slug: '',
  },
  settings: {
    currency: '',
    defaultCountry: '',
  },
}

const schema = yup
  .object({
    general: yup.object({
      name: yup.string().required(),
      slug: yup.string(),
    }),
    settings: yup.object({
      currency: yup.string().required(),
      defaultCountry: yup.string().required(),
    }),
  })
  .required()

const resolver = yupResolver(schema)

// ----------------------------------------------------------------------

const ActionsComponent = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  const { formState, getValues, reset } = useFormContext()
  const { isValid } = formState

  const addChannel = async (data: Channel) => {
    const result = await channelRequests.addChannel(data)
    if (result) {
      toggleDrawer()
      reset()
    }
  }

  const onSubmit = () => {
    const values = getValues()
    // flatten the data removing the first level of nesting
    const flattenedValues: Channel = Object.assign(
      {},
      values.general,
      values.settings,
    )
    addChannel(flattenedValues)
  }

  return (
    <Button startIcon={<Plus />} onClick={onSubmit} disabled={!isValid}>
      Publish
    </Button>
  )
}

// ----------------------------------------------------------------------

const NewChannel = () => {
  return (
    <AccordionGroup defaultExpanded="general">
      <Accordion
        id="general"
        title="General Information"
        description="Add general information about this channel."
      >
        <Grid gap={5}>
          <GridItem col={6}>
            <RHFTextField
              placeholder="Channel-USD"
              label="Channel name"
              name="general.name"
            />
          </GridItem>

          <GridItem col={6}>
            <RHFTextField
              placeholder="default-channel"
              label="Slug"
              name="general.slug"
            />
          </GridItem>
        </Grid>
      </Accordion>

      <Accordion
        id="settings"
        title="Channel Settings"
        description="Add general information about this channel."
      >
        <Grid gap={5}>
          <GridItem col={6}>
            <RHFComboBox
              placeholder="USD"
              label="Currency"
              name="settings.currency"
              options={[
                {
                  label: 'USD',
                  value: 'USD',
                },
                {
                  label: 'CAD',
                  value: 'CAD',
                },
              ]}
            />
          </GridItem>

          <GridItem col={6}>
            <RHFComboBox
              placeholder="United States"
              label="Country"
              name="settings.defaultCountry"
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
        </Grid>
      </Accordion>
    </AccordionGroup>
  )
}

export default withDrawerWizard(
  NewChannel,
  {
    defaultValues,
    resolver,
  },
  ActionsComponent,
)
