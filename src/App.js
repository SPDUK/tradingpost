import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// components
import Home from './components/home';
import About from './pages/about/about';
import Album from './pages/album/album';
import ErrorPage from './pages/errorpage/errorpage';
// css
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/album" exact component={Album} />
          <Route path="/about" exact component={About} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
