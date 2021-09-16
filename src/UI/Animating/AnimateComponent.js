import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
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
});

///////////////////////////
//////////////////////
export default function AnimateComponent({
  type,
  children,
  className,
  top = -500,
}) {
  const [In, setIn] = useState(false);
  const classes = useStyle();
  const animate = () => {
    if (window.location.pathname === "/" && className.includes("Home")) {
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
        enter: type === "r" ? classes.enterR : classes.enterL,
        enterActive: type === "r" ? classes.enterActiveR : classes.enterActiveL,
        exit: type === "r" ? classes.exitR : classes.exitL,
        exitActive: type === "r" ? classes.exitActiveR : classes.exitActiveL,
      }}
    >
      <>{children}</>
    </CSSTransition>
  );
}
