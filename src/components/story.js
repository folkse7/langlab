import { createStyles, Container, Text, Title, Grid, rem } from '@mantine/core';
import logo from './logo.png';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: rem(80),
    paddingBottom: rem(120),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(21),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
    },
  },

 pad: {
  marginTop: 0
 },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan('sm')]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

export function OurStory() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size="lg" className={classes.inner}>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        Our Story
      </Title>

        <Text align="center" className={classes.description}>
           By IB Students, For IB Students
        </Text>
        <Grid>
        <Grid.Col span={6}>
        <Text className={classes.description} color="dimmed">
           Fustrated by the lack of IB specific resources for language Acquisition courses,
           we set off with the mission to ensure students didn't have to struggle with languages
           due to lack of resources, and thus IB LanguageLab was born, the most comprehensive 
           language acquisition resource tailored to specifically for the IB course. Working with 
           IB Teachers and high performing students we created IB LanguageLab collating everything 
           IB students need to score a 7 in French and Spanish AB or SL, with new languages and 
           resources in the works!
        </Text>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={4} className={classes.pad}>
        <img src={logo} alt="Logo" width={350} />
        </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}