import { createStyles, rem, Select, Grid, TextInput } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));

export function ContainedInputs() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <div>
    <Grid>
    <Grid.Col span={2}></Grid.Col>
    <Grid.Col span={2}>
      <Select
        mt="md"
        withinPortal
        data={['French', 'Spanish']}
        placeholder="Pick one"
        label="Language"
        classNames={classes}
      />
    </Grid.Col>
    <Grid.Col span={2}>
      <Select
        mt="md"
        withinPortal
        data={['Standard Level', 'Ab Initio']}
        placeholder="Pick one"
        label="Level"
        classNames={classes}
      />
      </Grid.Col>
      <Grid.Col span={2}>
      <Select
        mt="md"
        withinPortal
        data={['Identities', 'Experiences', 'Human Ingenuity', 'Social Organization', 'Sharing the Planet']}
        placeholder="Pick one"
        label="Theme"
        classNames={classes}
      />
       </Grid.Col>
       <Grid.Col span={2}>
      <Select
        mt="md"
        withinPortal
        data={['Identities', 'Experiences', 'Human Ingenuity', 'Social Organization', 'Sharing the Planet']}
        placeholder="Pick one"
        label="Sub-Theme"
        classNames={classes}
      />
     </Grid.Col>
      <Grid.Col span={2}></Grid.Col>
      </Grid>
    </div>
    
  );
}