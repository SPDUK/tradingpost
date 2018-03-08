import React, {Component} from 'react';
import classNames from 'classnames';

import TradingPostIcon from '../images/tradingpost.svg';
// css
import '../styles/navbar.css';

class Navbar extends Component {
  constructor() {
    super();
  }

  burgerToggle() {
    let linksEl = document.querySelector('.navbar-mobile-links');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-wide">
          <div className="navbar-wide-div">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
          </div>
        </div>
        <div className="navbar-mobile">
          <i onClick={this.burgerToggle} className="fa fa-bars fa-2x navbar-mobile-burger" />
          <div className="navbar-mobile-links">
            <a className="navbar-mobile-links-active"  href="https://www.google.com">Link 1</a>
            <a className="navbar-mobile-links-active"  href="https://www.google.com">Link 2</a>
            <a className="navbar-mobile-links-active"  href="https://www.google.com">Link 3</a>
            <a className="navbar-mobile-links-active"  href="https://www.google.com">Link 4</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
