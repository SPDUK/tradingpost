import React, { Component } from 'react';


// components
import Navbar from './navbar';
import Footer from './footer';
// css

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        hello from home.
        <Footer />
      </div>
    );
  }
}

export default Home;
