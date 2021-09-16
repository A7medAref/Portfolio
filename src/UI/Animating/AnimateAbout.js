import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import theme from "../Theme";
const useStyle = makeStyles({
  enterR: {
    opacity: 0,
    transform: "translateX(-100px)",
    [theme.breakpoints.down("md")]: {
      transform: "translateX(-40px)",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(40px)",
    },
  },
  enterActiveR: {
    opacity: 1,
    transform: "translateX(0)",
    transition: "all 800ms",
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(0)",
    },
  },
  exitR: {
    opacity: 1,
    transform: "translateX(0)",
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(0)",
    },
  },
  exitActiveR: {
    opacity: 0,
    transform: "translateX(-100px)",
    transition: "all 800ms",
    [theme.breakpoints.down("md")]: {
      transform: "translateX(-40px)",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(40px)",
    },
  },
  enterL: {
    opacity: 0,
    transform: "translateX(100px)",
    [theme.breakpoints.down("md")]: {
      transform: "translateX(40px)",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(40px)",
    },
  },
  enterActiveL: {
    opacity: 1,
    transform: "translateX(0)",
    transition: "all 800ms",
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(0)",
    },
  },
  exitL: {
    opacity: 1,
    transform: "translateX(0)",
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(0)",
    },
  },
  exitActiveL: {
    opacity: 0,
    transform: "translateX(100px)",
    transition: "all 800ms",
    [theme.breakpoints.down("md")]: {
      transform: "translateX(40px)",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(40px)",
    },
  },
  enterU: {
    opacity: 0,
    transform: "translateY(40px)",
  },
  enterActiveU: {
    opacity: 1,
    transition: "all 800ms",
    transform: "translateY(0)",
  },
  exitU: {
    opacity: 1,
    transform: "translateY(0)",
  },
  exitActiveU: {
    opacity: 0,
    transform: "translateY(40px)",
    transition: "all 800ms",
  },
});

///////////////////////////
//////////////////////
export default function AnimateAbout({
  type,
  children,
  className,
  top = -500,
}) {
  const [In, setIn] = useState(false);
  const classes = useStyle();
  const animate = () => {
    if (window.location.pathname === "/about" && className.includes("About")) {
      const reached = document
        .getElementsByClassName(`${className}`)[0]
        .getBoundingClientRect().top;
      const revealPoint = top;
      const screen = window.scrollY;
      if (reached < screen - revealPoint) {
        setIn(true);
      } else {
        setIn(false);
      }
    }
  };
  //////////////////////////////////
  useEffect(() => {
    if (window.screen.availHeight > 1200) {
      setIn(true);
    } else {
      animate();
      window.addEventListener("scroll", () => {
        animate();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ////////////////////////////////////////
  return (
    <CSSTransition
      in={In}
      timeout={800}
      unmountOnExit
      mountOnEnter
      classNames={{
        enter:
          type === "r"
            ? classes.enterR
            : type === "u"
            ? classes.enterU
            : classes.enterL,
        enterActive:
          type === "r"
            ? classes.enterActiveR
            : type === "u"
            ? classes.enterActiveU
            : classes.enterActiveL,
        exit:
          type === "r"
            ? classes.exitR
            : type === "u"
            ? classes.exitU
            : classes.exitL,
        exitActive:
          type === "r"
            ? classes.exitActiveR
            : type === "u"
            ? classes.exitActiveU
            : classes.exitActiveL,
      }}
    >
      <>{children}</>
    </CSSTransition>
  );
}
