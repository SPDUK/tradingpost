import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// components
import Home from './components/home';
import Contact from './pages/contact/contact';
// css
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
