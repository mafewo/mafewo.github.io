import React, { Component } from 'react';
import Dashboard from './componentes/dashboard'
import Menu from './componentes/menu'

export default class App extends Component {
  render() {
    return (

<div className="row">
      <Menu />
      <Dashboard />
</div>
    );
  }
}
