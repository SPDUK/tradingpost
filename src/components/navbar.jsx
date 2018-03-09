import React, { Component } from 'react';

import TradingPostIcon from '../images/tradingpost.svg';
// css
import '../styles/navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.burgerMenu = this.burgerMenu.bind(this);
    this.burgerToggle = this.burgerToggle.bind(this);
  }

  burgerMenu() {
    this.burgerToggle();
    this.burgerAnimate();
  }

  burgerAnimate() {
    const burgerMenu = document.querySelector('.navbar-mobile-burger');
    burgerMenu.classList.toggle('open');
  }
  burgerToggle() {
    const linksEl = document.querySelector('.navbar-mobile-links');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-icon">
          <a href="#">
            <img src={TradingPostIcon} alt="Trading Post Icon"/>
          </a>
        </div>
        <div className="navbar-wide">
          <div className="navbar-wide-links">
            <a className="navbar-wide-links-active" href="https://www.google.com">Ebay</a>
            <a className="navbar-wide-links-active" href="https://www.google.com">Craigslist</a>
            <a className="navbar-wide-links-active" href="https://www.google.com">OfferUp</a>
            <a className="navbar-wide-links-active contact-link" href="https://www.google.com">Contact</a>
          </div>
        </div>
        <div className="navbar-mobile">
          <div onClick={this.burgerMenu} className="navbar-mobile-burger">
            <span />
            <span />
            <span />
          </div>
          <div className="navbar-mobile-links">
            <a className="navbar-mobile-links-active" href="https://www.google.com">Ebay</a>
            <a className="navbar-mobile-links-active" href="https://www.google.com">Craigslist</a>
            <a className="navbar-mobile-links-active" href="https://www.google.com">OfferUp</a>
            <a
              className="navbar-mobile-links-active contact-link"
              href="https://www.google.com">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
