import React from 'react';

import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-social">
        <a href="https://www.facebook.com/trading.post.904" className="fa fa-facebook"><span hidden>Facebook</span></a>
        <a href="https://www.youtube.com/user/Deepinthecity7/videos" className="fa fa-youtube"><span hidden>Youtube</span></a>
        <a href="https://plus.google.com/+CraigslistHunter" className="fa fa-google-plus"><span hidden>Google Plus</span></a>
        <a href="https://www.instagram.com/trading_post_resale/" className="fa fa-instagram"><span hidden>Instagram</span></a>
      </div>
      <div className="footer-contact">
        <div className="footer-contact-info">
          <p>Phone: 815-893-0218</p>
          <a href="https://www.ebay.com/usr/pajatek1">Ebay</a>
          <a href="https://offerupnow.com/p/2881193/">Offerup</a>
          <a href="">Craigslist</a>
          <p>hi</p>
        </div>
        <div className="footer-contact-adress">
          <p>hi</p>
        </div>
      </div>
      <div className="footer-contact-webdev">
        <a href="https://spduk.github.io/portfolio/">Website created by SPDUK</a>
      </div>
    </div>
  );
};

export default Footer;
