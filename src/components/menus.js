import React, { useState } from "react";
import { createStyles, rem, Select, Grid, Title } from '@mantine/core';
const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  }, 

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  option: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
 
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(30),
    fontWeight: 400,
    lineHeight: 1.1,
    margin: 0,
    padding: 50,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

}));
export function ContainedInputs() {
  const [lang, setLang] = useState();
  const [level, setLevel] = useState();
  const [theme, setTheme] = useState();
  const { classes } = useStyles();
  return (
    <div>
    <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={300}
        align="center"
        className={classes.title}
      >
        Select a language, level, and theme to generate the corresponding wordbank:
      </Title>
    <Grid>
    <Grid.Col span={3}></Grid.Col>
    <Grid.Col span={2}>
      <select id="language" defaultValue="Select language"
              onChange={(e) => setLang(e.target.value)}>
        <option value="1">Select Language</option>
        <option value="French">French</option>
        <option value="Spanish">Spanish</option>
      </select>
      </Grid.Col>
      <Grid.Col span={2}>
      <select id="level" defaultValue="Select level"
              onChange={(e) => setLevel(e.target.value)}>
        <option value="1">Select Level</option>
        <option value="Standard Level">Standard Level</option>
        <option value="Ab Initio">Ab Initio</option>
      </select>
      </Grid.Col>
      <Grid.Col span={2}>
      <select id="theme" defaultValue="Select theme"
              onChange={(e) => setTheme(e.target.value)}>
        <option value="1">Select Theme</option>
        <option value="Idenitites">Idenitites</option>
        <option value="Experiences">Experiences</option>
        <option value="Human Ingenuity">Human Ingenuity</option>
        <option value="Social Organization">Social Organization</option>
        <option value="Sharing the Planet">Sharing the Planet</option>
      </select>
      </Grid.Col>
      </Grid>
    </div>
  );
}