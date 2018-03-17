import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';

import TradingPostIcon from '../images/tpcl orng.svg';

import '../styles/navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.burgerMenu = this.burgerMenu.bind(this);
    this.burgerToggle = this.burgerToggle.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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

  handleScroll() {
    const myNav = document.querySelector('.navbar');
    window.onscroll = function navScrollFunc () {
      if (document.documentElement.scrollTop >= 25) {
        myNav.classList.add('nav-darkBlack');
        myNav.classList.remove('nav-black');
      } else {
        myNav.classList.add('nav-black');
        myNav.classList.remove('nav-darkBlack');
      }
    };
  }

  navScrollClick() {
    function handleClick(e) {
      e.preventDevault();
    }
    scroller.scrollTo('infotimes', {
      duration: 1000,
      delay: 100,
      smooth: 'easeInOutQuad',
    });
  }

  render() {
    return (
      <nav id="mynav" className="navbar">
        <div className="navbar-icon">
          <a href="#">
            <img src={TradingPostIcon} alt="Trading Post Buy Sell Trade Icon" />
          </a>
        </div>
        <div className="navbar-wide">
          <div className="navbar-wide-links">
            <Link to="/contact" className="navbar-wide-links navbar-wide-links navbar-wide-links-contact">Contact</Link>
            <a className="navbar-wide-links" href="https://offerupnow.com/p/2881193/">Offerup</a>
            <a className="navbar-wide-links" href="https://www.ebay.com/usr/pajatek1">Ebay</a>
            <a className="navbar-wide-links" href="https://chicago.craigslist.org/search/sss?sort=rel&is_paid=all&search_distance_type=mi&query=7100+Teckler+Blvd"></a>
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
            <a className="navbar-mobile-links-active" href="https://www.ebay.com/usr/pajatek1">Ebay</a>
            <a className="navbar-mobile-links-active" href="https://offerupnow.com/p/2881193/">OfferUp</a>
            <Link to="/contact" className="navbar-mobile-links-active contact-link">Contact</Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
