import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import { Home, LoginPage, NotFound } from '@csd-ui/components';


export const Router = () => {
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={Home} />
      </Switch>
    );
  };
  