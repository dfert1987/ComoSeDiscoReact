import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import { Landing, Home } from '../csd-ui';

export const Router = () => {


    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </div>
    );
  };
  