import React, {Component} from 'react';

import '../styles/buyselltrade.css';
import '../styles/app.css';

class BuySellTrade extends Component {
  render() {
    return (
      <div className="buyselltrade">
        <div className="container">
          <div className="buyselltrade-grid">
            <div className="buyselltrade-title">
              <div className="buyselltrade-title-text">
                <p>Buy</p>
                <i className="fa fa-shopping-cart"></i>
              </div>
              <div className="buyselltrade-title-text">
                <p>Sell</p>
                <i className="fa fa-dollar"></i>
              </div>
              <div className="buyselltrade-title-text">
              <p>Trade</p>
              <i className="fa fa-exchange"></i>
              </div>
            </div>
            <div className="buyselltrade-merch">
              electronics
            </div>
            <div className="buyselltrade-merch">
              tools
            </div>
            <div className="buyselltrade-merch">
              jewellery
            </div>
            <div className="buyselltrade-contact">
              phone at xxxx
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuySellTrade;
