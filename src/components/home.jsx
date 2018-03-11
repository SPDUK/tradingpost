import React, { Component } from 'react';

// components
import Navbar from './navbar';
import Footer from './footer';
import BuySellTrade from './buyselltrade';
import ContactInfo from './contactinfo';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <BuySellTrade />
        <ContactInfo />
        <Footer />
      </div>
    );
  }
}

export default Home;
