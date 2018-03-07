import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
//components
import Home from  './components/home';
//css
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
