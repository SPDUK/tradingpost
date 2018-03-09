import React, { Component } from 'react';

// components
import Navbar from './navbar';
import Footer from './footer';
import BuySellTrade from './buyselltrade';
// css
import '../styles/home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
          <BuySellTrade />
        <Footer />
      </div>
    );
  }
}

export default Home;
