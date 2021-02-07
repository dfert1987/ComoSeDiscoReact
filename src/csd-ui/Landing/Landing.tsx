import { useStyles } from './LandingStyles';
import React, {} from 'react';
import { Button } from '../../Components';
import { LOGIN_ROUTE, HOME_ROUTE} from '../Constants/src/index';

const id = 'Landing'

  export const Landing = () => {
    const classes = useStyles();

      return (
        <div className={classes.container} id={`${id}-container`}>
            <div className={classes.titleContainer}>
                <h4 className={classes.welcome}>Welcome to</h4>
                <h1 className={classes.title}>¿Como Se Disco?</h1>
                <h3 className={classes.subtitle}>Boogie Without Borders</h3>
            </div>
            <div className={classes.buttonContainer}>
                <Button className={classes.enterButton} theme="primary" href={HOME_ROUTE} id={`${id}-enter`} text="Enter as Guest" type="button"/>
                <Button className={classes.LoginButton} theme="warning" href={LOGIN_ROUTE} id={`${id}-loginpage`} text="Login" type="button" />
            </div>
        </div>
      );
  };