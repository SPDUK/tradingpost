import React, { Component } from 'react';

import Navbar from './navbar';
import BuySellTrade from './buyselltrade';
import Ratings from './ratings';
import ContactInfo from './contactinfo';
import Video from './video';
import Footer from './footer';

class Home extends Component {
  render() {
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
  }
}

export default Home;
