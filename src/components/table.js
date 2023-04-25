import { useState } from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  rem,
  Grid,
  Center,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      //position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },

  pad: {
    marginTop: 50,
  },

  fnt: {
    //textAlign: 'Center',
  },
}));

// const data = ['naima', 'hammad', 'amazon']
// const data = [
//     {
//       "name": "Athena Weissnat",
//       "company": "Little - Rippin",
//       "email": "Elouise.Prohaska@yahoo.com"
//     },
//     {
//       "name": "Deangelo Runolfsson",
//       "company": "Greenfelder - Krajcik",
//       "email": "Kadin_Trantow87@yahoo.com"
//     },
//     {
//       "name": "Danny Carter",
//       "company": "Kohler and Sons",
//       "email": "Marina3@hotmail.com"
//     },
// ]

export function TableScrollArea({ data }) {
  const { classes, cx } = useStyles();
  
  const [scrolled, setScrolled] = useState(false);
  //   const data =  [["Athena Weissnat", "Little - Rippin","Elouise.Prohaska@yahoo.com"]
  // ];
  //   const rows = data.map((row) => (
  //     <tr key={row.name}>
  //       <td>{row.name}</td>
  //       <td>{row.email}</td>
  //       <td>{row.company}</td>
  //     </tr>
  //   ));

  const students = [
    ["French", "English", "Example"],
    ["Pourquoi", "Why", "Pourquoi tu fait ça?"],
    ["Pourquoi", "Why", "Pourquoi tu fait ça?"],
    ["Pourquoi", "Why", "Pourquoi tu fait ça?"],
    ["Pourquoi", "Why", "Pourquoi tu fait ça?"],
    ["Pourquoi", "Why", "Pourquoi tu fait ça?"],
    ["Pourquoi", "Why", "Pourquoi tu fait ça?"],
    ["Pourquoi", "Why", "Pourquoi tu fait ça?"],
    ["Pourquoi", "Why", "Pourquoi tu fait ça?"],
    ["Pourquoi", "Why", "Pourquoi tu fait ça?"],
  ];
  return (
    <ScrollArea
      h={300}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Grid>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={8}>
          <Table miw={700} className={classes.pad}>
            <thead
              className={cx(classes.header, { [classes.scrolled]: scrolled })}
            >
              <tr className={classes.fnt}>
                {students[0].map((item, index) => {
                  return <th className={classes.fnt}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {students.slice(1, students.length).map((item, index) => {
                return (
                  <tr className={classes.fnt}>
                    <td className={classes.fnt}>{item[0]}</td>
                    <td className={classes.fnt}>{item[1]}</td>
                    <td className={classes.fnt}>{item[2]}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Grid.Col>
      </Grid>
    </ScrollArea>
  );

  // const students = [
  //     ["Name", "Subject", "Marks"],
  //     ["ABC", "Arts", 80],
  //     ["XYZ", "Science", "70"],
  //   ];
  //   return (
  //     <div>
  //       <table>
  //         <thead>
  //           <tr>
  //             {students[0].map((item, index) => {
  //               return <th>{item}</th>;
  //             })}
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {students.slice(1, students.length).map((item, index) => {
  //             return (
  //               <tr>
  //                 <td>{item[0]}</td>
  //                 <td>{item[1]}</td>
  //                 <td>{item[2]}</td>
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
}
