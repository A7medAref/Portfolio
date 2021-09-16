import { makeStyles } from "@material-ui/core";
import theme from "../../UI/Theme";

export const useStyle = makeStyles({
  ContactPage: {
    margin: "5rem 0 0",
  },
  Img: {
    width: "26rem",
    [theme.breakpoints.down("md")]: {
      width: "24rem",
      margin: "1rem auto 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      maxWidth: "24rem",
    },
  },
  inputContainer: {
    marginTop: "2rem",
  },

  inputField: {
    minWidth: "27rem",
    height: "100%",
    borderRadius: "40px",
    border: "none",
    boxSizing: "border-box",
    backgroundColor: "#E2E6E9",
    color: "#444",
    fontWeight: "500",
    fontSize: "1.1rem",
    "&:focus": {
      outline: "none",
    },
    padding: "1rem 3.1rem",
    "&::placeholder": {
      color: "AEB0B8",
    },
    fontFamily: "Arial",
    [theme.breakpoints.down("xs")]: {
      minWidth: "13rem",
      maxWidth: "24rem",
      width: "85vw",
    },
  },
  TextArea: {
    height: "10rem",
    borderRadius: ".5rem",
    padding: "1.5rem",
  },
  iconContainer: {
    position: "relative",
    marginTop: "2rem",
    height: "fit-content",
  },
  icon: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "1.1rem",
    color: "#AEB0B8",
    fontSize: "1.3rem",
  },
  SendButton: {
    margin: "2rem auto 0",
    fontSize: "1rem",
    borderRadius: "50px",
    fontWeight: "700",
    textTransform: "capitalize",
    padding: ".6rem",
    width: "100%",
  },
  or: {
    color: "#aaa",
    // fontWeight: "bold",
    fontSize: "1.5rem",
    margin: "1rem auto",
  },
  iconContact: {
    margin: "0 2rem 3rem",
    fontSize: "2.5rem",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      margin: "0 3rem 3rem 0",
      "&:last-child": {
        margin: "0 0 3rem 0",
      },
    },
  },
  dialogPaper: {
    minWidth: "40vw",
    minHeight: "90vh",
    padding: "1rem 5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 1rem",
      minWidth: "85vw",
      textAlign: "center",
    },
  },
  dialogContainer: {
    width: "100%",
    boxSizing: "border-box",
    height: "90vh",
  },
  dialogImage: {
    width: "500px",
    margin: "4rem 0 4rem",
    [theme.breakpoints.down("sm")]: {
      width: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
  },
  //////////
  SendContainer: {
    maxWidth: "27rem",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      maxWidth: "24rem",
    },
  },
  FormController: {
    [theme.breakpoints.down("md")]: {
      margin: "auto",
    },
  },
});
