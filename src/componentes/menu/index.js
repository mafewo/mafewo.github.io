import React, { Component } from 'react';
import {Icon, Navbar, NavItem} from 'react-materialize';
import s from './index.css';

export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() {
      return (
<Navbar brand='logo' right>
    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
</Navbar>
      )
  }
}