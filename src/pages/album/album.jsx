import React from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import './album.css';

const Album = () => {
  return (
    <div>
      <Navbar />
      <div className="album">
        <div className="contact-hero">
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Album;
