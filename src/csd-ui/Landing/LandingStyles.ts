import { createStyles, makeStyles } from "@material-ui/core";
// import tribalBackground from './tribalBackground.jpeg';

const tribalBackground = require("./tribalBackground.jpeg");

// eslint-disable-next-line
import {
  BLACK,
  SNOW,
  BEBAS,
  CUPRUM,
  PRIMARY_COLOR,
  WARNING_COLOR,
  HOVER_WARNING,
} from "../Constants/src";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      backgroundImage: "url(https://i.imgur.com/TMYG7Gl.jpg)",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      margin: "auto",
    },
    titleContainer: {
      alignContent: "center",
      color: PRIMARY_COLOR,
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
    },
    welcome: {
      color: WARNING_COLOR,
      fontFamily: CUPRUM,
      fontSize: "40px",
      marginBottom: "0em",
      textShadow: "2px 4px 4px black",
    },
    title: {
      fontFamily: BEBAS,
      fontSize: "100px",
      letterSpacing: "5px",
      marginBottom: "0em",
      marginTop: ".05em",
      textShadow: "2px 6px 5px black",
      wordSpacing: "15px",
    },
    subtitle: {
      color: WARNING_COLOR,
      fontFamily: CUPRUM,
      fontSize: "40px",
      marginTop: ".1em",
      textShadow: "2px 4px 4px black",
    },
    buttonContainer: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: "1em",
    },
    enterButton: {
      fontSize: "40px",

      height: "2em",
      margin: ".5em",
      width: "6em",
    },
    LoginButton: {
      fontSize: "40px",
      height: "2em",
      padding: ".5em",
      margin: ".5em",
      width: "6em",
    },
    loginContainer: {
      backgroundColor: SNOW,
      border: "5px solid black",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "row",
      height: "60%",
      marginLeft: "auto",
      marginRight: "auto",
      width: "60%",
    },
    panelContainer: {
      backgroundImage: "url(https://i.imgur.com/vc2mWbd.jpg)",
      backgroundSize: "cover",
      borderRight: "5px solid black",
      flexDirection: "column",
      height: "100%",
      width: "40em",
    },
    panelText: {
      bottom: ".5em",
      color: SNOW,
      fontFamily: BEBAS,
      fontSize: "35px",
      height: "2em",
      marginBottom: "1em",
      marginLeft: ".3em",
      opacity: "90%",
      position: "relative",
      textShadow: "1px 1px 5px black",
      width: "1em",
    },
    loginHeader: {
      flexDirection: "column",
    },
    loginTitle: {
      fontFamily: BEBAS,
      fontSize: "40px",
      textAlign: "center",
    },
    loginButtonContainer: {
      flexDirection: "row",
    },
    loginFormContainer: {
      justifyContent: "center",
      marginLeft: "8px",
      marginRight: "auto",
    },
    guestEnterButton: {
      borderColor: BLACK,
      fontSize: "20px",
      height: "2em",
      margin: ".5em",
      width: "40%",
    },
    loginButton: {
      borderColor: BLACK,
      fontSize: "20px",
      height: "2em",
      margin: ".5em",
      paddingLeft: "1em",
      paddingRight: "1em",
      width: "30%",
    },
    loginInputContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: "8px",
      marginRight: "auto",
      marginTop: "3em",
    },
    loginForm: {
      width: "100%",
    },
    userInput: {
      borderColor: "black",
      borderRadius: "6px",
      borderWidth: "2px",
      fontFamily: CUPRUM,
      fontSize: "15px",
      height: "2.75em",
      marginBottom: "1em",
      paddingLeft: ".5em",
      width: "90%",
    },
    usernameLabel: {
      fontFamily: CUPRUM,
      fontSize: "20px",
      marginBottom: ".3em",
      textAlign: "left",
    },
    main: {
      backgroundImage: "url(https://i.imgur.com/E1GpT7H.png)",

      width: "100%",
    },
    userPassword: {
      borderColor: "black",
      borderRadius: "6px",
      borderWidth: "2px",
      fontSize: "15px",
      height: "2.75em",
      marginBottom: ".8em",
      paddingLeft: ".5em",
      width: "90%",
    },
    logoImage: {
      height: "400px",
    },
    bottomRow: {
      flexDirection: "row",
      marginTop: "4em",
      paddingLeft: ".5em",
    },
    forgotButton: {
      backgroundColor: "transparent",
      color: BLACK,
      fontSize: "20px",
      "&:hover": {
        color: PRIMARY_COLOR,
        backgroundColor: "transparent",
      },
    },
    contactLink: {
      marginLeft: "12em",
    },
    // loginIcon: {
    //   height: "1em",
    // },
  })
);
