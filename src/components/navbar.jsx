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
      <div className="navbar-icon">
        <img src={TradingPostIcon} alt="Trading Post Icon"/>
      </div>
        <div className="navbar-wide">
          <div className="navbar-wide-links">
            <a className="navbar-wide-links-active" href="#">Ebay</a>
            <a className="navbar-wide-links-active" href="#">Craigslist</a>
            <a className="navbar-wide-links-active" href="#">OfferUp</a>
            <a className="navbar-wide-links-active contact-link" href="#">Contact</a>
          </div>
        </div>
        <div className="navbar-mobile">
          <i onClick={this.burgerToggle} className="fa fa-bars fa-2x navbar-mobile-burger" />
          <div className="navbar-mobile-links">
            <a className="navbar-mobile-links-active"  href="https://www.google.com">Ebay</a>
            <a className="navbar-mobile-links-active"  href="https://www.google.com">Craigslist</a>
            <a className="navbar-mobile-links-active"  href="https://www.google.com">OfferUp</a>
            <a className="navbar-mobile-links-active contact-link"  href="https://www.google.com">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
