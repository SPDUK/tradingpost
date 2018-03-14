import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { animateScroll as scroll } from 'react-scroll';

import ContactButtonComponent from './contactbuttoncomponent';
import '../styles/buyselltrade.css';
import '../styles/app.css';

class BuySellTrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.contactButtonClick = this.contactButtonClick.bind(this);
    this.componentButtonClick = this.componentButtonClick.bind(this);
  }
  contactButtonClick() {
    const contactButton = document.querySelector('.buyselltrade-about-button');
    contactButton.classList.toggle('buyselltrade-about-button-open');
    this.setState({ showComponent: !this.state.showComponent });
  }
  componentButtonClick(){
    this.setState({ showComponent: false });
  }

  render() {
    return (
      <div className="buyselltrade">
        <div className="container">
          <div className="buyselltrade-grid">
            <div className="buyselltrade-title">
              <div className="buyselltrade-title-text">
                <p>Buy</p>
                <i className="fa fa-shopping-cart" />
              </div>
              <div className="buyselltrade-title-text">
                <p>Sell</p>
                <i className="fa fa-dollar" />
              </div>
              <div className="buyselltrade-title-text">
                <p>Trade</p>
                <i className="fa fa-exchange" />
              </div>
            </div>
            <div className="buyselltrade-about">
              <p className="buyselltrade-about-top">Trading Post in Crystal Lake, IL is not a pawn shop, it is a new way to shop or sell.</p>
              <button onClick={this.contactButtonClick}className="buyselltrade-about-button button"><p>Get In Touch</p> <span>Close</span></button>
              <CSSTransitionGroup
    transitionName='contactButtonClick'
    transitionEnter={true}
    transitionLeave={true}
    transitionEnterTimeout={250}
    transitionLeaveTimeout={250}>
              {this.state.showComponent
                ? <ContactButtonComponent key={'contactButtonClickKey'} componentButtonClick={this.componentButtonClick} />
                : null}
                </CSSTransitionGroup>
            </div>
          </div>
          <div className="buyselltrade-grid-merch">
            <div className="buyselltrade-merch">
              <p className="buyselltrade-merch-icon">
                <i className="fa fa-mobile"></i>
                <span> Electronics</span>
              </p>
              <div className="buyselltrade-merch-info">
                <p>Game systems / Car Audio</p>
                <p>Home Stereo Systems / TVs</p>
                <p>Bluray & DVD Players</p>
                <p>iPhones / Smartphones / Laptops</p>
                <p>PCs & iMacs / iPads / Tablets</p>
              </div>
              <a href="https://www.ebay.com/sch/Consumer-Electronics/293/m.html?_nkw=&_armrs=1&_ipg=&_from=&_ssn=pajatek1">
                  <button className="button">Shop Our Electronics at Ebay</button>
                </a>
            </div>
            <div className="buyselltrade-merch">
              <p className="buyselltrade-merch-icon">
                <i className="fa fa-wrench"></i>
                <span> Tools</span>
              </p>
              <div className="buyselltrade-merch-info">
                <p>Chain Saws / Weed Eaters /</p>
                <p>Drills / Cordless Power Tools / Saws</p>
                <p>Pressure Washers / item </p>
                <p>Item 2 / Long item name </p>
                <p>Item 3 / item 4  </p>
              </div>
              <a href="https://www.ebay.com/sch/Business-Industrial/12576/m.html?_nkw=&_armrs=1&_ipg=&_from=&_ssn=pajatek1">
                  <button className="button">Buy Our Tools at Ebay</button>
                </a>
            </div>
            <div className="buyselltrade-merch">
              <p className="buyselltrade-merch-icon">
                <i className="fa fa-diamond"></i>
                <span> Jewelry</span>
              </p>
              <div className="buyselltrade-merch-info">
                <p>Men's and Women's Jewelry</p>
                <p>Gold / Silver / Platinum</p>
                <p>Watches / Earrings / Chains</p>
                <p>Bracelets / Broken Gold / Precious Stones</p>
                <p>Diamonds / Antiques</p>
              </div>
              <a href="https://www.ebay.com/sch/Jewelry-Watches/281/m.html?_nkw=&_armrs=1&_ipg=&_from=&_ssn=pajatek1&_sac=1">
                  <button className="button">See Our Jewelry at Ebay</button>
                </a>
            </div>
          </div>
          <div className="buyselltrade-contact">
            <div className="buyselltrade-contact-info">
              <p className="buyselltrade-contact-info-top">Everything Else!</p>
              <p>Think you have something worth selling?</p>
              <p>Our friendly staff will help you find the best price for your item.</p>
              <p className="buyselltrade-contact-info-number">Our Number:
                <a href="tel:8158930218" aria-label="8 1 5. 8 9 3. 0 2 1 8.">(815) 893-0218</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default BuySellTrade;
