import { useStyles } from './LandingStyles';
import React, { useState } from 'react';
import { LandingPage, LoginPage } from '../Landing';

const id = 'Landing';
const LOGIN = 'login';
const LANDING = 'landing';

  export const Landing = () => {
    const classes = useStyles();
    const [display, setDisplay] = useState('')

    let content;
    switch (display) {
        case LOGIN:
            content = (
                <LoginPage
                    id={`${id}-login`}
                    setDisplay={() => setDisplay(LANDING)}
                />
            );
            break;
        default:
            content = (
                <LandingPage
                    id={`${id}`}
                    setDisplay={() => setDisplay(LOGIN)}
                />
            );
    }
      return (
        <div className={classes.container} id='container'>
            {content}
        </div>
      );
  };