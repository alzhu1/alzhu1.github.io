import { NavLink } from 'react-router-dom';

import '../stylesheets/Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header-half-left">
        <h1 className="header-title">Alexander Zhu</h1>
      </div>

      <div className="header-half-right">

        <div className="header-options">
          <ul className="header-sidebar">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/history">History</NavLink></li>
          </ul>
        </div>

        <div className="header-icons">
          <a href="https://github.com/alzhu1">
            <i className="fa fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/alexander-g-zhu">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>

      </div>
    </div>
  );
}
