import React from 'react';

import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-social">
        <a href="https://www.facebook.com/trading.post.904" className="fa fa-facebook footer-social-links"><span hidden>Facebook</span></a>
        <a href="https://www.youtube.com/user/Deepinthecity7/videos" className="fa fa-youtube footer-social-links"><span hidden>Youtube</span></a>
        <a href="https://plus.google.com/+CraigslistHunter" className="fa fa-google-plus footer-social-links"><span hidden>Google Plus</span></a>
        <a href="https://www.instagram.com/trading_post_resale/" className="fa fa-instagram footer-social-links"><span hidden>Instagram</span></a>
      </div>
      <div className="footer-contact">
        <div className="footer-contact-info">
          <a className="footer-contact-info-links" href="https://www.ebay.com/usr/pajatek1">Ebay</a>
          <a className="footer-contact-info-links" href="https://offerupnow.com/p/2881193/">Offerup</a>
          <a className="footer-contact-info-links" href="https://chicago.craigslist.org/search/sss?sort=rel&is_paid=all&search_distance_type=mi&query=7100+Teckler+Blvd">Craigslist</a>
        </div>
        <div className="footer-contact-adress">
          <p className="footer-contact-info-phone">Phone: <span>815-893-0218</span></p>
          <p> 7100 Teckler Blvd, Crystal Lake, IL 60014 </p>
        </div>
      </div>
      <div className="footer-contact-webdev">
        <a href="https://github.com/SPDUK">© Copyright 2018, SPDUK - Trading Post Crystal Lake</a>

      </div>
    </div>
  );
};

export default Footer;
