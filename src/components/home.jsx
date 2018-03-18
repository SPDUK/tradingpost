import React from 'react';

import Navbar from './navbar';
import BuySellTrade from './buyselltrade';
import Ratings from './ratings';
import ContactInfo from './contactinfo';
import Video from './video';
import Footer from './footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <BuySellTrade />
      <Ratings />
      <ContactInfo />
      <Video />
      <Footer />
    </div>
  );
};

export default Home;
