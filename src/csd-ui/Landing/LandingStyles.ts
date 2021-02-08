import { createStyles, makeStyles } from '@material-ui/core';
// import tribalBackground from './tribalBackground.jpeg';

const tribalBackground = require("./tribalBackground.jpeg")

// eslint-disable-next-line
import {
    BLACK,
    SNOW,
    BEBAS,
    CUPRUM,
    PRIMARY_COLOR,
    WARNING_COLOR,
    HOVER_WARNING,
  } from '../Constants/src';

  export const useStyles = makeStyles(() =>
    createStyles({ 
        container: {
            display: 'flex',
            backgroundImage: "url(https://i.imgur.com/TMYG7Gl.jpg)",
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'center',
            margin: 'auto',
        },
        titleContainer: {
            alignContent: 'center',
            color: PRIMARY_COLOR,
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
        },
        welcome: {
            color: WARNING_COLOR,
            fontFamily: CUPRUM,
            fontSize: '40px',
            marginBottom: '0em',
            textShadow: '2px 4px 4px black',

        },
        title: {
            fontFamily: BEBAS,
            fontSize: '100px',
            letterSpacing: '5px',
            marginBottom: '0em',
            marginTop: '.05em',
            textShadow: '2px 6px 5px black',
            wordSpacing: '15px',
        },
        subtitle: {
            color: WARNING_COLOR,
            fontFamily: CUPRUM,
            fontSize: '40px',
            marginTop: '.1em',
            textShadow: '2px 4px 4px black',
        },
        buttonContainer: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        enterButton:{
            margin: '.5em',
        },
        LoginButton: {
            margin: '.5em',
        },
        loginContainer: {
            display: 'flex',
            flexDirection:'row',
        },
        panelContainer: {
            flexDirection:'column',
            backgroundImage: "url(https://i.imgur.com/vc2mWbd.jpg)",
            backgroundSize: 'cover',
            height: '20em',
            width: '20em',
        },
        panelText: {
            color: SNOW,
            fontFamily: BEBAS,
        },
        loginHeader: {
            flexDirection: 'column',
        },
        loginTitle: {
            fontFamily: BEBAS,
        },
        loginButtonContainer: {
            flexDirection: 'row'
        },
        loginFormContainer: {

        },
        guestEnterButton: {
            margin: '.5em',
        },
        loginButton: {
            margin: '.5em',
        },
        loginForm: {

        },
        // loginIcon: {

        // },
    })
);