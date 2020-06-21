import React, { Component } from 'react';
import Project from './Project';

import '../stylesheets/ProjectList.css';

class ProjectList extends Component {

  // TODO: make a list of Projects from Project.js
  // Do ^

  render() {
    return (
      <div className="project-list">
        <h2 className="project-list-title">Projects!</h2>

        <p>
          Sorry! This is currently a WIP, but you can see some projects I've
          worked on at my Github account <a href="https://github.com/alzhu1">here</a>.
        </p>

      </div>
    );
  }
}

export default ProjectList;
