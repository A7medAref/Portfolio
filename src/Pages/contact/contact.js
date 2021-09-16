import {
  Button,
  Dialog,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { FaUserAlt, FaFacebook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Mail from "../../UI/Images/Mail.svg";
import { useStyle } from "./contactStyle";
import { IoIosSend } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { useEffect, useState } from "react";
import Sent from "../../UI/Images/Sent.svg";
import { Link } from "react-router-dom";
export default function ContactPage({ setValue }) {
  const classes = useStyle();
  const [open, setDialog] = useState(false);
  ////////
  ////////////

  const [NameError, setNameError] = useState(false);
  const [MailError, setMailError] = useState(false);
  const [nameField, setNameField] = useState("");
  const [mailField, setMailField] = useState("");
  const [messageField, setMessageField] = useState("");
  function validation(e) {
    switch (e.target.id) {
      case "name":
        setNameError(e.target.value.length === 0);
        break;
      case "mail":
        setMailError(
          !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
        );
        break;
      default:
        break;
    }
  }
  const isDisabled =
    NameError ||
    MailError ||
    messageField.length === 0 ||
    nameField.length === 0 ||
    mailField.length === 0;
  useEffect(() => {
    window.scrollBy(0, -1000);
  }, []);

  ///////////
  ////////////
  const Theme = useTheme();
  const matchMd = useMediaQuery(Theme.breakpoints.down("md"));
  return (
    <div style={{ minHeight: window.innerHeight > 1700 ? "98vh" : "90vh" }}>
      <Grid
        container
        className={classes.ContactPage}
        direction={matchMd ? "column-reverse" : undefined}
      >
        <Grid
          container
          item
          md={12}
          lg={7}
          sm={12}
          justifyContent="center"
          alignItems="center"
        >
          <img src={Mail} alt="send mail" className={classes.Img} />
        </Grid>
        <Grid
          container
          item
          lg={5}
          direction="column"
          className={classes.inputContainer}
        >
          <Grid container justifyContent={matchMd ? "center" : undefined}>
            <Typography variant="h4" style={{ opacity: ".9" }}>
              Contact Us
            </Typography>
          </Grid>
          <form className={classes.FormController}>
            <div className={classes.iconContainer}>
              <FaUserAlt className={classes.icon} />
              <input
                type="text"
                placeholder="User"
                className={classes.inputField}
                id="name"
                onChange={(e) => {
                  setNameField(e.target.value);
                  validation(e);
                }}
                onFocus={() => {
                  setNameError(false);
                }}
              ></input>
            </div>
            <div className={classes.iconContainer}>
              <GrMail className={classes.icon} />
              <input
                placeholder="Email"
                type="mail"
                id="mail"
                className={classes.inputField}
                onChange={(e) => {
                  setMailField(e.target.value);
                  validation(e);
                }}
                onFocus={() => {
                  setMailError(false);
                }}
              ></input>
            </div>
            <div className={classes.iconContainer}>
              <textarea
                placeholder="Message..."
                type="text"
                className={`${classes.inputField} ${classes.TextArea}`}
                onChange={(e) => setMessageField(e.target.value)}
              ></textarea>
            </div>
          </form>
          <Grid
            container
            className={classes.SendContainer}
            direction="column"
            alignItems={matchMd ? "center" : undefined}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.SendButton}
              disabled={isDisabled}
              onClick={(_) => {
                if (!isDisabled) setDialog(true);
              }}
            >
              Send Message{" "}
              <IoIosSend style={{ marginLeft: ".5rem", fontSize: "1.3rem" }} />
            </Button>
            <span className={classes.or}>Or</span>
            <Grid container justifyContent="center">
              <Grid item className={classes.iconContact}>
                <a
                  href="https://www.facebook.com/ahmad.mostafaaref.7"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#4E75CC" }}
                >
                  <FaFacebook />
                </a>
              </Grid>
              <Grid item className={classes.iconContact}>
                <a
                  style={{ color: "#10aa50" }}
                  href="https://api.whatsapp.com/send?phone=201155210037"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiWhatsappFill />
                </a>
              </Grid>
              <Grid item className={classes.iconContact}>
                <a
                  href="https://www.linkedin.com/in/ahmed-aref-9a8a25215/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#0A66C2" }}
                >
                  <SiLinkedin />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* /////////////////////////////////////////////////////// */}
      <Dialog
        open={open}
        onClose={() => {
          setDialog(false);
        }}
        classes={{ paper: classes.dialogPaper }}
      >
        <Grid
          container
          className={classes.dialogContainer}
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Typography variant="h4" style={{ opacity: ".8" }}>
            Message Sent successfully
          </Typography>
          {/* <Typography variant="subtitle2">We will contact soon</Typography> */}
          <img src={Sent} alt="mail sent" className={classes.dialogImage}></img>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/"
            onClick={() => setValue(0)}
          >
            Back To The Home Page
          </Button>
        </Grid>
      </Dialog>
    </div>
  );
}
