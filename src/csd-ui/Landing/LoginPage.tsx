import React, { useState, useCallback } from 'react';
import { Button } from '../../Components';
import {TextField} from '@material-ui/core';
import input from '@material-ui/core';
import LoginIcon from './LoginIcon.jpeg';
import { useStyles } from './LandingStyles';
import { BLACK, HOME_ROUTE } from '../Constants/src/index';


type Props = {
    id: string;
    setDisplay: () => void;
};

const login = () => {
    console.log('logged in') 
}

export const LoginPage = ({ id, setDisplay }: Props) => {
    const classes = useStyles();
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

    const updateField = useCallback(
    (field: string, value: string) => {
      if (field === "username") {
        setUsername(value);
      }
    },
    [setUsername],
  );

    return (
        <div className={classes.loginContainer} id={`${id}-container`}>
            <div className={classes.panelContainer}>
                <h3 className={classes.panelText}>¿Como Se Disco?</h3>
            </div>
            <div className={classes.loginFormContainer}>
                <div className={classes.loginHeader}>
                    {/* <img src={LoginIcon} alt='login-icon' className={classes.loginIcon}/> */}
                    <h2 className={classes.loginTitle}>Login</h2>
                </div>
                <form id={`${id}-form`} className={classes.loginForm}>
                    <div className={classes.loginButtonContainer}>
                        <div className={classes.loginInputContainer}>
                            <TextField
                                className={classes.userInput}
                                label="Username"
                                id={`${id}-username`}
                                variant="outlined"
                                value= {username as string}
                                onChange={(e) => updateField("username", e.target.value)}
                            />
                        </div>
                        <Button
                            id={`${id}-login`}
                            className={classes.loginButton}
                            text="Login"
                            onClick={login}
                            theme="primary"
                            type="button"
                        />
                        <Button 
                            id={`${id}-enter`}
                            className={classes.guestEnterButton}
                            text="Enter as Guest"
                            href={HOME_ROUTE}
                            theme="primary"
                            type="button"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};