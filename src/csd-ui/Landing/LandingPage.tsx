import React from 'react';
import { Button } from '../../Components';
import { useStyles } from './LandingStyles';
import logo from './Untitled-2.png'
import { HOME_ROUTE } from '../Constants/src/index';


type Props = {
    id: string;
    setDisplay: () => void;
};

export const LandingPage = ({ id, setDisplay }: Props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.titleContainer}>
                <h4 className={classes.welcome}>Welcome to</h4>
                <h1 className={classes.title}>¿Como Se Disco?</h1>
                <img 
                    className={classes.logoImage}
                    src={logo} 
                    alt="logo"
                />
                <h3 className={classes.subtitle}>Boogie Without Borders</h3>
            </div>
            <div className={classes.buttonContainer}>
                <Button 
                    className={classes.enterButton} 
                    theme="primary" 
                    href={HOME_ROUTE} 
                    id={`${id}-enter`} 
                    text="Enter as Guest" 
                    type="button"
                />
                <Button 
                    className={classes.LoginButton} 
                    theme="warning" 
                    onClick={setDisplay} 
                    id={`${id}-loginpage`} 
                    text="Login" 
                    type="button" 
                />
            </div>
      </div>
    );
}