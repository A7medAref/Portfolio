import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
  Slide,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStyle } from "./HeaderStyle";

const validateTabs = (setValue) => {
  switch (window.location.pathname) {
    case "/":
      setValue(0);
      break;
    case "/about":
      setValue(1);
      break;
    case "/projects":
      setValue(2);
      break;
    case "/contact":
      setValue(3);
      break;

    default:
      break;
  }
};

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header({ value, setValue }) {
  const classes = useStyle();
  const [OpenMenu, setOpenMenu] = useState(false);
  const Theme = useTheme();
  const match = useMediaQuery(Theme.breakpoints.down("md"));
  useEffect(() => {
    validateTabs(setValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  window.addEventListener("popstate", function (e) {
    var state = e.state;
    if (state !== null) {
      validateTabs(setValue);
    }
  });

  const tabs = (
    <Tabs
      value={value}
      className={classes.Tabs}
      onChange={handleTabs}
      TabIndicatorProps={{ style: { display: "none" } }}
    >
      <Tab
        label="Home"
        className={classes.Tab}
        disableRipple
        classes={{ selected: classes.selectedTab }}
        component={Link}
        to="/"
      ></Tab>
      <Tab
        label="About"
        className={classes.Tab}
        disableRipple
        classes={{ selected: classes.selectedTab }}
        component={Link}
        to="/about"
      ></Tab>
      <Tab
        label="Projects"
        className={classes.Tab}
        disableRipple
        component={Link}
        classes={{ selected: classes.selectedTab }}
        to="/projects"
      ></Tab>
      <Tab
        className={`${classes.Tab} ${classes.contactTab}`}
        classes={{
          disabled: classes.contactTab,
          selected: classes.contactTabSelected,
        }}
        label="Contact"
        component={Link}
        to="/contact"
      ></Tab>
    </Tabs>
  );

  const menu = (
    <>
      <IconButton
        className={classes.menuIcon}
        onClick={(_) => {
          setOpenMenu(true);
        }}
      >
        <GiHamburgerMenu />
      </IconButton>
      <SwipeableDrawer
        classes={{ paper: classes.SwipeableDrawer }}
        open={OpenMenu}
        onClose={(_) => {
          setOpenMenu(false);
        }}
        onOpen={() => {}}
      >
        <List disablePadding className={classes.menuCard}>
          <ListItem
            selected={value === 0}
            button
            onClick={() => {
              setOpenMenu(false);
              setValue(0);
            }}
            component={Link}
            to="/"
          >
            <ListItemText
              disableTypography
              className={
                value === 0
                  ? `${classes.menuCardItems} ${classes.selectedMenuItem}`
                  : classes.menuCardItems
              }
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            selected={value === 1}
            button
            onClick={() => {
              setOpenMenu(false);
              setValue(1);
            }}
            component={Link}
            to="/about"
          >
            <ListItemText
              disableTypography
              className={
                value === 1
                  ? `${classes.menuCardItems} ${classes.selectedMenuItem}`
                  : classes.menuCardItems
              }
            >
              About
            </ListItemText>
          </ListItem>
          <ListItem
            selected={value === 2}
            button
            onClick={() => {
              setOpenMenu(false);
              setValue(2);
            }}
            component={Link}
            to="/projects"
          >
            <ListItemText
              disableTypography
              className={
                value === 2
                  ? `${classes.menuCardItems} ${classes.selectedMenuItem}`
                  : classes.menuCardItems
              }
            >
              Projects
            </ListItemText>
          </ListItem>
          <ListItem
            selected={value === 3}
            button
            onClick={() => {
              setOpenMenu(false);
              setValue(3);
            }}
            component={Link}
            to="/contact"
          >
            <ListItemText
              disableTypography
              className={
                value === 3
                  ? `${classes.menuCardItems} ${classes.selectedMenuItem}`
                  : classes.menuCardItems
              }
            >
              Contact
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );

  function handleTabs(event, newValue) {
    setValue(newValue);
  }
  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar className={classes.Toolbar}>
          <span className={classes.Logo}>
            A<div>r</div>ef
          </span>
          {match ? menu : tabs}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
