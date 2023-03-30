import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { auth, signInWithGoogle } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
    paddingBottom: 0,
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

export function HeaderAction({ links }) {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  const [loggedIn, setloggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setloggedIn(true);
    } else {
      setloggedIn(false);
    }
  });

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              // onClick={()=> navigate("/"+link.link)}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        // onClick={()=> navigate("/"+link.link)}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header
      height={HEADER_HEIGHT}
      sx={{ borderBottom: 0, marginBottom: "0 !important" }}
      mb={120}
    >
      <Container className={classes.inner} fluid>
        <Group>
          {
            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="sm"
            />
          }
          <img
            src={logo}
            alt="Logo"
            width={55}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          {/* <MantineLogo size={28} /> */}
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        {loggedIn ? (
          <img
            src={auth.currentUser.photoURL}
            alt="Profile"
            style={{ height: "3rem", borderRadius: "100px" }}
          />
        ) : (
          <Button
            variant="gradient"
            gradient={{ from: "#F73761", to: "#F73761" }}
            radius="xl"
            h={30}
            onClick={signInWithGoogle}
          >
            Log In
          </Button>
        )}
      </Container>
    </Header>
  );
}
