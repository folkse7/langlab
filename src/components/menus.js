import React, { useState, useEffect } from "react";
import { executeQuery } from "../firebase";
import { createStyles, rem, Select, Grid, Title } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  option: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(30),
    fontWeight: 700,
    lineHeight: 1.1,
    margin: 0,
    padding: 30,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },
}));
export function ContainedInputs(
  // Take input of data
  { setData }
) {
  const [lang, setLang] = useState("");
  const [level, setLevel] = useState("");
  const [theme, setTheme] = useState("");
  // Use effect
  useEffect(() => {
    if (lang) {
      executeQuery(lang, level, theme).then((docCount) => {
        const data = {
          list: docCount,
          lang: lang,
        };
        setData(data);
      });
    }
  }, [lang, level, theme]);

  const { classes } = useStyles();
  return (
    <div>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        align="center"
        className={classes.title}
      >
        Select a language, level, and theme to generate the corresponding
        wordbank
      </Title>
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <Grid.Col span={2}>
          <select
            id="language"
            defaultValue="Select language"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{ width: "80%" }}
          >
            <option value="" disabled>
              Select Language
            </option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
          </select>
        </Grid.Col>
        <Grid.Col span={2}>
          <select
            id="level"
            defaultValue="Select level"
            onChange={(e) => setLevel(e.target.value)}
            style={{ width: "80%" }}
          >
            <option value="" disabled>
              Select Level
            </option>
            <option value="Standard Level">Standard Level</option>
            <option value="AB initio">Ab Initio</option>
          </select>
        </Grid.Col>
        <Grid.Col span={2}>
          <select
            id="theme"
            defaultValue="Select theme"
            onChange={(e) => setTheme(e.target.value)}
            style={{ width: "80%" }}
          >
            <option value="" disabled>
              Select Theme
            </option>
            <option value="Identity">Identities</option>
            <option value="Experiences">Experiences</option>
            <option value="Human Ingenuity">Human Ingenuity</option>
            <option value="Social Organization">Social Organization</option>
            <option value="Sharing the Planet">Sharing the Planet</option>
          </select>
        </Grid.Col>
      </Grid>
      {/* <h3>You selected: {lang}, {level}, and {theme}</h3> */}
    </div>
  );
}
