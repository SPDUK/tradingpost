import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { animateScroll as scroll, scroller } from 'react-scroll';
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
  }
  contactButtonClick() {
    if (!this.state.showComponent) {
      scroll.scrollTo(250);
    }
    const contactButton = document.querySelector('.buyselltrade-about-button');
    contactButton.classList.toggle('buyselltrade-about-button-open');
    this.setState({ showComponent: !this.state.showComponent });
  }

  render() {
    return (
      <div className="buyselltrade">
        <div className="container">
          <div className="buyselltrade-grid">
            <div className="buyselltrade-title">
              <p className="buyselltrade-title-top">Trading Post</p>
              <p className="buyselltrade-title-middle">Crystal Lake, IL</p>
              <p className="buyselltrade-title-bottom">Buy <span>/ </span>Sell <span>/ </span>Trade</p>
              <p className="buyselltrade-title-tagline">Not your typical pawn shop, we bring you the best deals at the lowest prices</p>
            </div>
            <div className="buyselltrade-about">
              <button onClick={this.contactButtonClick}className="buyselltrade-about-button button"><p>Get In Touch</p> <span>Close</span></button>
              <CSSTransitionGroup
                transitionName="contactButtonClick"
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}
              >
                {this.state.showComponent
                  ? <ContactButtonComponent key="contactButtonClickKey" contactButtonClick={this.contactButtonClick} />
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
                    <li>Stereo Systems</li>
                    <li>Musical Instruments</li>
                    <li>Blu Ray & DVD Players</li>
                    <li>PCs & Laptops</li>
                    <li>Phones & Tablets</li>
                    <li>Washers & Home Electrics</li>
                  </ul>
                </div>
                <a href="https://www.ebay.com/sch/Consumer-Electronics/293/m.html?_nkw=&_armrs=1&_ipg=&_from=&_ssn=pajatek1">
                  <button id="elecBtn" className="button buyselltrade-merch-button"><p>Buy Our Electronics at Ebay</p></button>
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
                    <li>Garage Euipment</li>
                    <li>Pressure Washers</li>
                    <li>Hand Tools</li>
                    <li>Weed Eaters</li>
                    <li>Sewing Machines</li>
                    <li>Lawn Mowers</li>
                  </ul>
                </div>
                <a href="https://www.ebay.com/sch/Business-Industrial/12576/m.html?_nkw=&_armrs=1&_ipg=&_from=&_ssn=pajatek1">
                  <button id="toolsBtn" className="button buyselltrade-merch-button"><p>Buy Our Tools at Ebay</p></button>
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
                    <li>Men's and Women's Jewelry</li>
                    <li>Gold, Silver & Platinum</li>
                    <li>Antiques</li>
                    <li>Earrings, Chains & Bracelets</li>
                    <li>Broken Gold</li>
                    <li>Precious Stones and Diamonds</li>
                  </ul>
                </div>
                <a href="https://www.ebay.com/sch/Jewelry-Watches/281/m.html?_nkw=&_armrs=1&_ipg=&_from=&_ssn=pajatek1&_sac=1">
                  <button id="jewelryBtn" className="button buyselltrade-merch-button"><p>Buy Our Jewelry at Ebay</p></button>
                </a>
              </div>
            </div>
          </div>
          <div className="buyselltrade-contact">
            <div className="buyselltrade-contact-info">
              <p className="buyselltrade-contact-info-top">Think you have something worth selling?</p>
              <p>We deal in all kinds of items, give us a call with any questions you might have</p>
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
