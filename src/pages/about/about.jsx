import React from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import './about.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="about-container">
          <div className="about-main">
            <div className="about-main-title">
              <h1>About Us</h1>
            </div>
            <div className="about-main-description">
              <h3>
                <p><span>Launched in Crystal Lake, IL 2012.</span></p>
                <p>Trading Post Store is upscale, well-located, modern retail outlet servicing a much needed niche in the marketplace. At Trading Post we still practice the art of customer service. Our buyers purchase quality pre-owned merchandise from customers and then our customer service team sells those items at prices everyone can afford.</p>
                <p><span>We buy, sell, trade and take consignment for pre-owned items.</span></p>
                <p>Trading Post is changing consumer perceptions of the second hand industry by the systematic application of modern retailing practices, professional management techniques and high ethical standards. Trading Post store strive to be as professional, well-appointed, and customer service oriented as the very best retailers of new goods.</p>
                <p><span>We buy anything of value, if it is in working order give us a call and we can help you find your price.</span></p>
                <p>We buy and sell Home Electronics, Game systems, LED and LCD TV’s¸ Home Stereo Systems, Blue Ray & DVD Players. Car Audio Equipment including Stereo, Speakers and Amplifiers. We also purchase and sell iPhones, Smartphones, Laptops, IMac, iPads and Tablets. We buy and sell tools, Musical Instruments Chain Saws, Weed Eaters, Pressure Washers and Antiques.</p>
                <p><span>We offer gift cards, trade options and the top dollar prices, putting us ahead of the typical pawn shop.</span></p>
                <p>You always get the best value when you trade in your items for a Trading Post gift card. Our gift cards never expire and can be used to make purchases and layaways at any time.</p>
                <p><span>We have a strong connection with the local law enforcement and high ethical standards.</span></p>
                <p>We want to be recognized as a leader in trading and marketing of pre-owned goods, our staff of proffesionals will never deal with stolen goods.</p>
                <p><span>Thank you and please feel free to visit Trading Post any time we are open.</span></p>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
