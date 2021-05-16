/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
  BrowserRouter
} from "react-router-dom";

import Error404 from './Components/Pages/Error404/Error404.jsx'
import App from './App.jsx';


ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path='*' component={Error404} />
          <Route path='/#' component={Error404} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
