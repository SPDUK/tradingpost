import React, { Component } from 'react';

import '../styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-social">
          <a href="https://www.facebook.com/trading.post.904" className="fa fa-facebook-square"></a>
          <a className="fa fa-youtube-square"></a>
          <a className="fa fa-google-plus-square"></a>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-info">
            <p>Phone us at XXX-XXX-XXX</p>
            <a href="">Ebay</a>
            <a href="">Offerup</a>
            <a href="">Offerup</a>
            <p></p>
          </div>
          <div className="footer-contact-adress">
            <p></p>
          </div>
        </div>
        <div className="footer-contact-webdev">
          <a href="https://spduk.github.io/portfolio/">Website created by SPDUK</a>
        </div>
      </div>
    );
  }
}

export default Footer;
