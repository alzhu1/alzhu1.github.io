import React, { Component } from 'react';
import {Route, HashRouter} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import ProjectList from './ProjectList';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header></Header>

          <div className="body-content">
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={ProjectList} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
