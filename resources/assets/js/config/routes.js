import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../ui/pages/Home';
import Login from '../ui/pages/Login';
import Callback from '../ui/pages/Callback';

export default [
    <Route exact path="/" key="home" component={Home}/>,
    <Route exact path="/login" key="login" component={Login} />,
    <Route path="/(.*)/callback" key="social-callback" component={Callback} />
];