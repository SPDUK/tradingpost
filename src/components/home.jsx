import React, { Component } from 'react';

// components
import Navbar from './navbar';
import Footer from './footer';
// css
import '../styles/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="home">
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
