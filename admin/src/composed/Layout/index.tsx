/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

import {
  BaseHeaderLayout,
  Breadcrumbs,
  Button,
  ContentLayout,
  Crumb,
  Link,
} from '@strapi/design-system'
import { ArrowLeft } from '@strapi/icons'
import { DefaultValues, Resolver, useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import FormProvider from '../../components/HookForm/FormProvider'
import { BASE_URL } from '../../constants/plugin'

type LayoutProps<T extends object = any> = {
  title: string
  actions?:
    | (() => JSX.Element)
    | {
        label: string
        path: string
        onClick?: () => void
      }
  resolver?: Resolver<T>
  defaultValues?:
    | DefaultValues<Record<string, unknown>>
    | { [x: string]: object | undefined }
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  title,
  actions,
  children,
  ...form
}) => {
  const { resolver, defaultValues } = form

  const methods = useForm({
    defaultValues,
    resolver: resolver as any,
  })

  const history = useHistory()

  const ActionComponent =
    typeof actions === 'function'
      ? actions
      : typeof actions === 'object' && (
          <Button
            onClick={() =>
              actions.path
                ? history.push(BASE_URL + actions.path)
                : actions.onClick
            }
          >
            {actions.label}
          </Button>
        )

  return (
    <FormProvider methods={methods}>
      <BaseHeaderLayout
        navigationAction={
          <Link startIcon={<ArrowLeft />} to={`${BASE_URL}/configuration`}>
            Go back
          </Link>
        }
        primaryAction={ActionComponent}
        title={title}
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Store</Crumb>
            <Crumb>{title}</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <ContentLayout>{children}</ContentLayout>
    </FormProvider>
  )
}

const withLayout = <P extends object>(
  Component: (props: P) => JSX.Element,
  layoutProps: Omit<LayoutProps, 'children'>,
) => {
  return (props: P) => (
    <Layout {...layoutProps}>
      <Component {...props} />
    </Layout>
  )
}

export default withLayout
