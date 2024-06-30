import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Grid, GridItem, Typography } from '@strapi/design-system'
import { Plus } from '@strapi/icons'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'

import attributeRequests from '../../api/attribute'
import { RHFTextField } from '../../components/HookForm'
import RHFComboBox from '../../components/HookForm/RHFComboBox'
import RHFSortable from '../../components/HookForm/RHFSortable'
import Section from '../../components/Section'
import withLayout from '../../composed/Layout'
import { Attribute } from '../../types/attribute'
import { useFormValues } from '../../utils/useFormValues'
import { inputTypes } from './utils/inputTypes'

const defaultValues = {
  name: '',
  code: '',
  inputType: 'dropdown',
}

type Metadata = {
  name: string
  value: string
}

const metadataSchema = z.object({
  name: z.string(),
  value: z.string(),
})

const schema = z.object({
  name: z.string().min(1),
  code: z.string(),
  inputType: z.string().min(1),
  values: z.array(metadataSchema),
  metadata: z.array(metadataSchema),
})

const resolver = zodResolver(schema)

// ----------------------------------------------------------------------

const ActionsComponent = () => {
  const { formState, getValues, reset } = useFormContext()
  const { isValid } = formState

  console.log(getValues())

  const addAttribute = async (data: Attribute) => {
    const result = await attributeRequests.addAttribute(data)
    if (result) {
      reset()
    }
  }

  const onSubmit = () => {
    const values = getValues() as Attribute
    addAttribute(values)
  }

  return (
    <Button startIcon={<Plus />} onClick={onSubmit} disabled={!isValid}>
      Publish
    </Button>
  )
}

// ----------------------------------------------------------------------

const AttributesCreate = () => {
  const formValues = useFormValues()

  const needAttributeValues =
    formValues.inputType === 'dropdown' ||
    formValues.inputType === 'multiple-select' ||
    formValues.inputType === 'swatch'

  return (
    <Grid gap={5}>
      <GridItem col={9}>
        <Section
          title="General information"
          description="Add general information about this attribute."
        >
          <Grid gap={5}>
            <GridItem col={6}>
              <RHFTextField placeholder="Color" label="Name" name="name" />
            </GridItem>
            <GridItem col={6}>
              <RHFTextField placeholder="color" label="Code" name="code" />
            </GridItem>

            <GridItem col={12}>
              <RHFComboBox
                label="Catalog Input Type for Store Owner"
                name="inputType"
                options={inputTypes}
              />
            </GridItem>
          </Grid>
        </Section>

        <RHFSortable
          id="values"
          title="Attribute Values"
          description="Add values for this attribute."
          disabled={!needAttributeValues}
        />

        <RHFSortable
          id="metadata"
          title="Metadata"
          description="Add metadata for this attribute."
        />
      </GridItem>

      <GridItem col={3}>
        <Typography>Side</Typography>
      </GridItem>
    </Grid>
  )
}

export default withLayout(AttributesCreate, {
  title: 'Create an attribute',
  actions: ActionsComponent,
  resolver,
  defaultValues,
})
