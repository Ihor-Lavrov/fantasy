import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { SignIn } from '../pages/Auth';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={SignIn} />
      <Redirect to='/' />
    </Switch>
  )
}
