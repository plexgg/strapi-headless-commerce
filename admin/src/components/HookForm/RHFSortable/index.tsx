import { useFieldArray, useFormContext } from "react-hook-form";
import { Accordion } from "../../Wizard";
import { Grid, GridItem, Button } from '@strapi/design-system'
import { SortableList } from "./Sortable";
import Section from "../../Section";

type Props = {
  id: string;
  title: string;
  description: string;
  disabled?: boolean;
}

export type Metadata = {
  id: number
  name: string
  value: string | number
}

export default function RHFSortable({ id, title, description, disabled }: Readonly<Props>) {
  const { control, setValue, getValues } = useFormContext()

  const { fields, append, move } = useFieldArray({
    control,
    name: id,
  });

  const handleAddEntry = () => {
    append({ name: '', value: '' });
  }

  const handleSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    move(oldIndex, newIndex);
  };

  return (
    <Section
      title={title}
      description={description}
      action={
        <Button
          onClick={handleAddEntry}
        >
          Assign value
        </Button>
      }
    >
      <Grid gap={5}>
        <GridItem col={12}>
          <SortableList
            fields={fields}
            values={getValues(id) as Metadata[]}
            onInputChange={(index, name, value) => {
              setValue(`${id}.${index}.${name}`, value);
            }}
            onSortEnd={handleSortEnd}
          />
        </GridItem>
      </Grid>
    </Section>
  )
}
