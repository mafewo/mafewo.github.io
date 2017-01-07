import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './componentes/dashboard';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard}/>
    </Route>
  </Router>
),
  document.getElementById('root')
);
