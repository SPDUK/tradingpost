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
            <img src={TradingPostIcon} alt="Trading Post Buy Sell Trade Icon" />
          </a>
        </div>
        <div className="navbar-wide">
          <div className="navbar-wide-links">
            <a className="navbar-wide-links navbar-wide-links navbar-wide-links-contact" href="https://www.google.com">Contact</a>
            <a className="navbar-wide-links" href="https://offerupnow.com/p/2881193/">Offerup</a>
            <a className="navbar-wide-links" href="https://chicago.craigslist.org/search/sss?sort=rel&is_paid=all&search_distance_type=mi&query=7100+Teckler+Blvd">Craigslist</a>
            <a className="navbar-wide-links" href="https://www.ebay.com/usr/pajatek1">Ebay</a>
          </div>
        </div>
        <div className="navbar-mobile">
          <div
            className="navbar-mobile-burger"
            onClick={this.burgerMenu}
            onKeyDown={this.burgerMenu}
            role="menu"
            tabIndex="0"
          >
            <span />
            <span />
            <span />
          </div>
          <div className="navbar-mobile-links">
            <a className="navbar-mobile-links-active" href="https://www.ebay.com/usr/pajatek1" role="menuitem">Ebay</a>
            <a className="navbar-mobile-links-active" href="https://chicago.craigslist.org/search/sss?sort=rel&is_paid=all&search_distance_type=mi&query=7100+Teckler+Blvd" role="menuitem">Craigslist</a>
            <a className="navbar-mobile-links-active" href="https://offerupnow.com/p/2881193/" role="menuitem">OfferUp</a>
            <a className="navbar-mobile-links-active contact-link"href="https://www.google.com">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
