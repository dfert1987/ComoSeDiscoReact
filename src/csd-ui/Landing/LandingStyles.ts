import { createStyles, makeStyles } from '@material-ui/core';
// import tribalBackground from './tribalBackground.jpeg';

const tribalBackground = require("./tribalBackground.jpeg")

// eslint-disable-next-line
import {
    BLACK,
    SNOW,
    PRIMARY_COLOR,
    HOVER_WARNING,
  } from '../Constants/src';

  export const useStyles = makeStyles(() =>
    createStyles({ 
        container: {
            backgroundImage: "url(https://i.imgur.com/TMYG7Gl.jpg)",
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'center',
            margin: 'auto',
        },
        titleContainer: {
            alignContent: 'center',
            color: 'turquoise',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
        },
        welcome: {
            marginBottom: '0em'
        },
        title: {
            fontSize: '80px',
            marginBottom: '0em',
            marginTop: '.05em',
            textShadow: '2px 6px 5px black',

        },
        subtitle: {
            marginTop: '.1em'
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
    })
);