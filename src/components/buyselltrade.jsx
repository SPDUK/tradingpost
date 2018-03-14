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
  componentButtonClick() {
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
                transitionName="contactButtonClick"
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}
              >
                {this.state.showComponent
                  ? <ContactButtonComponent key="contactButtonClickKey" componentButtonClick={this.componentButtonClick} />
                  : null}
              </CSSTransitionGroup>
            </div>
          </div>
          <div className="buyselltrade-grid-merch">
          <div className="buyselltrade-grid-merch-card">
            <div className="buyselltrade-merch">
              <p className="buyselltrade-merch-icon">
                <i id="elecIcon" className="fa fa-mobile" />
                <span> Electronics</span>
              </p>
              <div className="buyselltrade-merch-info">
                <ul>
                <li>item & item 2</li>
                <li>item & item 2</li>
                <li>item & item 2</li>
                <li>item & item 2</li>
                <li>item & item 2</li>
                </ul>
              </div>
              <a href="https://www.ebay.com/sch/Consumer-Electronics/293/m.html?_nkw=&_armrs=1&_ipg=&_from=&_ssn=pajatek1">
                <button id="elecBtn" className="button buyselltrade-merch-button">Buy Our Electronics at Ebay</button>
              </a>
            </div>
            </div>
            <div className="buyselltrade-grid-merch-card">
            <div className="buyselltrade-merch">
              <p className="buyselltrade-merch-icon">
                <i id="toolsIcon" className="fa fa-wrench" />
                <span> Tools</span>
              </p>
              <div className="buyselltrade-merch-info">
                <ul>
                  <li>item & item 2</li>
                  <li>item</li>
                  <li>item & item 2</li>
                  <li>item & item 2</li>
                  <li>item & item 2</li>
                </ul>
              </div>
              <a href="https://www.ebay.com/sch/Business-Industrial/12576/m.html?_nkw=&_armrs=1&_ipg=&_from=&_ssn=pajatek1">
                <button id="toolsBtn" className="button buyselltrade-merch-button">Buy Our Tools at Ebay</button>
              </a>
            </div>
          </div>
          <div className="buyselltrade-grid-merch-card">
            <div className="buyselltrade-merch">
              <p className="buyselltrade-merch-icon">
                <i id="jewelryIcon" className="fa fa-diamond" />
                <span> Jewelry</span>
              </p>
              <div className="buyselltrade-merch-info">
               <ul>
                 <li>item</li>
                 <li>item</li>
                 <li>item</li>
                 <li>item</li>
                 <li>item</li>
               </ul>
              </div>
              <a href="https://www.ebay.com/sch/Jewelry-Watches/281/m.html?_nkw=&_armrs=1&_ipg=&_from=&_ssn=pajatek1&_sac=1">
                <button id="jewelryBtn" className="button buyselltrade-merch-button">Buy Our Jewelry at Ebay</button>
              </a>
            </div>
            </div>
          </div>
          <div className="buyselltrade-contact">
            <div className="buyselltrade-contact-info">
              <p className="buyselltrade-contact-info-top"></p>
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
