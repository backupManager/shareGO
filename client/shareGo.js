import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/pages/login/index';
import Signup from './src/pages/signup/index';
import ForgotPassword from './src/pages/forgot/index';
import Dashboard from './src/pages/dashboard/index';


export default class shareGo extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="root">
          <Scene key="Login" component={Login} initial={true} hideNavBar={true} onBack = {() =>{return null;}}/>
          <Scene key="Signup" component={Signup} hideNavBar={true}/>
          <Scene key="ForgotPassword" component={ForgotPassword} hideNavBar={true} />
          <Scene key="Dashboard" component={Dashboard} hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}