import { Box, Flex, Grid, GridItem, Typography } from '@strapi/design-system'

type SectionProps = {
  title: string
  description: string
  action?: React.ReactNode
  children: React.ReactNode
}

export default function Section({
  title,
  description,
  action,
  children,
}: SectionProps) {
  return (
    <Grid gap={6} marginBottom={8}>
      <GridItem col={12}>
        <Grid gap={6}>
          <GridItem col={9}>
            <Box direction="column">
              <Typography
                fontWeight="bold"
                textColor="neutral800"
                as="h2"
                id="title"
              >
                {title}
              </Typography>
              <Typography>{description}</Typography>
            </Box>
          </GridItem>

          <GridItem col={3}>
            {action && (
              <Flex display="flex" justifyContent="end">
                {action}
              </Flex>
            )}
          </GridItem>
        </Grid>
      </GridItem>

      <GridItem col={12}>{children}</GridItem>
    </Grid>
  )
}
