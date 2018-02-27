import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import '../stylesheets/Header.css';

class Header extends Component {
  render() {
    return (

        <ul className="header-sidebar">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>

    );
  }
}

export default Header;
