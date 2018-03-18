import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import './errorpage.css';

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div href="/" className="errorpage">
        <h1 className="errorpage-text">Page not found.</h1>
        <Link to="/" className="errorpage-button">Click here to go Home</Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
