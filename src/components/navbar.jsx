import React, { Component } from 'react';

import TradingPostIcon from '../images/tradingpost.svg';
//css
import '../styles/navbar.css';



class Navbar extends Component {
  constructor() {
    super()
    this.mobileMenu = this.mobileMenu.bind(this);
  }

  mobileMenu() {
    document.getElementByClassName("")
  }

  render() {
    return (
      <nav className="navbar">
      <div className="nav-toggle">
        <i onClick={mobileMenu}className="fa fa-bars" aria-hidden="true"></i>
      </div>
        <ul>
          <div className="navbar-icon">
            <li><a href="https://www.google.com"><img src={TradingPostIcon}/></a></li>
          </div>
          <li><a className="navbar-link" href="https://www.google.com">Craigslist</a></li>
          <li><a className="navbar-link" href="https://www.google.com">Offerup</a></li>
          <li><a className="navbar-link" href="https://www.google.com">Ebay</a></li>
          <li><a className="navbar-link" href="https://www.google.com">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
