import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { SignIn, SignUp } from '../pages/Auth';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <Redirect to='/' />
    </Switch>
  )
}
