import React, { ChangeEvent, useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, GridItem, TextInput } from '@strapi/design-system'
import * as yup from 'yup'

import { Plus } from '@strapi/icons'
import { useFormContext } from 'react-hook-form'
import attributeRequests from '../../api/attribute'
import { RHFTextField } from '../../components/HookForm'
import RHFComboBox from '../../components/HookForm/RHFComboBox'
import { Metadata } from '../../components/Metadata'
import { Modal } from '../../components/Modal'
import { Table } from '../../components/Table'
import {
  Accordion,
  AccordionGroup,
  withDrawerWizard,
} from '../../components/Wizard'
import { Attribute } from '../../types/attribute'
import { useFormValues } from '../../utils/useFormValues'
import { attributeValuesHeaders } from './utils/headers'
import { inputTypes } from './utils/inputTypes'

const defaultValues = {
  name: '',
  code: '',
  inputType: 'dropdown',
}

const schema = yup
  .object({
    name: yup.string().required(),
    code: yup.string(),
    inputType: yup.string().required(),
    values: yup
      .object({
        data: yup.array().of(yup.string()).min(1).required(),
      })
      .when(['inputType'], (val, schema) => {
        const inputType = val as unknown as string
        if (
          inputType &&
          (inputType === 'dropdown' ||
            inputType === 'multiple-select' ||
            inputType === 'swatch')
        ) {
          return schema.required()
        }
        return schema
      }),
  })
  .required()

const resolver = yupResolver(schema)

// ----------------------------------------------------------------------

const ActionsComponent = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  const { formState, getValues, reset } = useFormContext()
  const { isValid } = formState

  console.log(formState, formState.errors, getValues())

  const addAttribute = async (data: Attribute) => {
    const result = await attributeRequests.addAttribute(data)
    if (result) {
      toggleDrawer()
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

const NewAttributes = () => {
  const formValues = useFormValues()
  const { setValue } = useFormContext()

  const [showModal, setShowModal] = useState(false)
  const [modalValue, setModalValue] = useState<string>('')
  const [values, setValues] = useState<Array<string>>([])

  const formatedValues = values.map((value) => ({
    value,
  }))

  const needAttributeValues =
    formValues.inputType === 'dropdown' ||
    formValues.inputType === 'multiple-select' ||
    formValues.inputType === 'swatch'

  const addValue = () => {
    const data = [...values, modalValue]

    setValues(data)
    setModalValue('')
    setValue(
      'values',
      {
        data,
      },
      { shouldValidate: true },
    )
  }

  return (
    <>
      <AccordionGroup defaultExpanded="general">
        <Accordion
          id="general"
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
        </Accordion>

        <Accordion
          id="values"
          title="Attribute Values"
          description="Add values for this attribute."
          action={
            <Button onClick={() => setShowModal(!showModal)}>
              Assign value
            </Button>
          }
          disabled={!needAttributeValues}
        >
          <Grid gap={5}>
            <GridItem col={12}>
              <Table
                headers={attributeValuesHeaders}
                rows={formatedValues}
                isLoading={false}
              />
            </GridItem>
          </Grid>
        </Accordion>

        <Metadata />
      </AccordionGroup>

      <Modal
        title="Add value"
        open={showModal}
        setOpen={setShowModal}
        action={{
          label: 'Save',
          fn: () => addValue(),
        }}
      >
        <Grid>
          <GridItem col={12}>
            <TextInput
              placeholder="Name"
              label="Name"
              name="value"
              value={modalValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setModalValue(e.target.value)
              }
            />
          </GridItem>
        </Grid>
      </Modal>
    </>
  )
}

export default withDrawerWizard(
  NewAttributes,
  {
    defaultValues,
    resolver,
  },
  ActionsComponent,
)
