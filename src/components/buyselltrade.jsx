import React from 'react';

import '../styles/buyselltrade.css';
import '../styles/app.css';

const BuySellTrade = () => {
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
            <p className="buyselltrade-about-top"> Trading Post in Crystal Lake, IL is not a pawn shop, it is a new way to shop or sell.</p>
            <p className="buyselltrade-about-bottom">We Buy and Sell..</p>
          </div>
          <div className="buyselltrade-merch">
            <p className="buyselltrade-merch-icon"><i className="fa fa-mobile" /> Electronics</p>
            <div className="buyselltrade-merch-info">
              <p>Game systems / TVs / Home Stereo Systems</p>
              <p>Bluray & DVD Players / Car Audio Equipment</p>
              <p>iPhones / Smartphones / Laptops</p>
              <p>PCs & iMacs / iPads / Tablets</p>
            </div>
          </div>
          <div className="buyselltrade-merch">
            <p className="buyselltrade-merch-icon"><i className="fa fa-wrench" /> Tools</p>
            <div className="buyselltrade-merch-info">
              <p>Chain Saws / Weed Eaters / Pressure Washers</p>
              <p>Drills / Cordless Power Tools / Saws</p>
            </div>
          </div>
          <div className="buyselltrade-merch">
            <p className="buyselltrade-merch-icon"><i className="fa fa-diamond" /> Jewellery</p>
            <div className="buyselltrade-merch-info">
              <p>Men's and Women's Jewellery</p>
              <p>Gold / Silver / Platinum</p>
              <p>Watches / Earrings / Chains</p>
              <p>Bracelets / Broken Gold / Precious Stones</p>
              <p>Diamonds / Antiques</p>
            </div>
          </div>
          <div className="buyselltrade-merch">
            <p className="buyselltrade-merch-icon"><i className="fa fa-music" /> Extra stuff</p>
            <div className="buyselltrade-merch-info">
              <p>Item / Item / Item</p>
              <p>Item 2 / Item 2 / Item 2</p>
              <p>Item 3 / Item 3 / Item 3</p>
              <p>Item 4 / Item 4 / Item 4</p>
            </div>
          </div>
          <div className="buyselltrade-contact">
            <div className="buyselltrade-contact-info">
              <p className="buyselltrade-contact-info-top">Everything Else!</p>
              <p>Think you have something worth selling?</p>
              <p className="buyselltrade-contact-info-number">Call us at:
                <a href="tel:8158930218" aria-label="8 1 5. 8 9 3. 0 2 1 8.">(815) 893-0218</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellTrade;
