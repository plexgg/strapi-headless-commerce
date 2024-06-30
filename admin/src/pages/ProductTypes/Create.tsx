import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, GridItem, Typography } from '@strapi/design-system'
import { Plus } from '@strapi/icons'
import { useFormContext } from 'react-hook-form'
import * as yup from 'yup'

import productTypeRequests from '../../api/productType'
import { RHFTextField } from '../../components/HookForm'
import RHFComboBox from '../../components/HookForm/RHFComboBox'
import RHFSortable from '../../components/HookForm/RHFSortable'
import Section from '../../components/Section'
import withLayout from '../../composed/Layout'
import { ProductType } from '../../types/productType'

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

// ----------------------------------------------------------------------

const ActionsComponent = () => {
  const { formState, getValues, reset } = useFormContext()
  const { isValid } = formState

  console.log(getValues())

  const add = async (data: ProductType) => {
    const result = await productTypeRequests.addProductType(data)
    if (result) {
      reset()
    }
  }

  const onSubmit = () => {
    const values = getValues() as ProductType
    add(values)
  }

  return (
    <Button startIcon={<Plus />} onClick={onSubmit} disabled={!isValid}>
      Publish
    </Button>
  )
}

// ----------------------------------------------------------------------

const ProductTypesCreate = () => {
  return (
    <Grid gap={5}>
      <GridItem col={9}>
        <Section
          title="General information"
          description="Add general information about this attribute."
        >
          <Grid gap={5}>
            <GridItem col={6}>
              <RHFTextField
                placeholder="Record"
                label="Type name"
                name="name"
              />
            </GridItem>

            <GridItem col={6}>
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
        </Section>

        <RHFSortable
          id="values"
          title="Product Attributes"
          description="Add attributes to this product type."
        />
      </GridItem>

      <GridItem col={3}>
        <Typography>Side</Typography>
      </GridItem>
    </Grid>
  )
}

export default withLayout(ProductTypesCreate, {
  title: 'Create a product type',
  resolver,
  defaultValues,
  actions: ActionsComponent,
})
