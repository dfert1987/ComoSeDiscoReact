import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import { Landing, } from '../csd-ui';

export const Router = () => {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} /> */}
      </Switch>
    );
  };
  