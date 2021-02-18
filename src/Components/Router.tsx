import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import { Landing, Home, About } from '../csd-ui';

export const Router = () => {


    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    );
  };
  