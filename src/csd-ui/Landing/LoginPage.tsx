import React, { useState, useCallback } from 'react';
import { Button } from '../../Components';
import {TextField} from '@material-ui/core';
import input from '@material-ui/core';
import LoginIcon from './LoginIcon.jpeg';
import { useStyles } from './LandingStyles';
import { BLACK, HOME_ROUTE, SECONDARY } from '../Constants/src/index';


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
      if (field === "password") {
        setPassword(value);
      }
    },
    [setUsername, password],
  );

    return (
        <div className={classes.loginContainer} id={`${id}-container`}>
            <div className={classes.panelContainer}>
                <h3 className={classes.panelText}>¿Como Se Disco?</h3>
            </div>
            <div className={classes.main}>
            <div className={classes.loginHeader}>
                    {/* <img src={LoginIcon} alt='login-icon' className={classes.loginIcon}/> */}
                    <h2 className={classes.loginTitle}>Login</h2>
                </div>
            <div className={classes.loginFormContainer}>
                <form id={`${id}-form`} className={classes.loginForm}>
                    <div className={classes.loginButtonContainer}>
                        <div className={classes.loginInputContainer}>
                            <label className={classes.usernameLabel}>USERNAME</label>
                            <TextField
                                className={classes.userInput}
                                id={`${id}-username`}
                                variant="outlined"
                                value= {username as string}
                                onChange={(e) => updateField("username", e.target.value)}
                            />
                             <label className={classes.usernameLabel}>PASSWORD</label>
                            <TextField
                                className={classes.userPassword}
                                id={`${id}-password`}
                                type="password"
                                variant="outlined"
                                value= {password as string}
                                onChange={(e) => updateField("password", e.target.value)}
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
        </div>
    );
};