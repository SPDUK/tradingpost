import React, { Component } from 'react';

import '../styles/contactinfo.css';

class ContactInfo extends Component {
  render() {
    return (
      <div className="contactinfo">
        <div className="contactinfo-times">
          <div className="contactinfo-times-title">
            <p>Opening Times</p>
          </div>
          <p className="contactinfo-times-day">Monday 10:00 - 19:00</p>
          <p className="contactinfo-times-day">Tuesday 10:00 - 19:00</p>
          <p className="contactinfo-times-day">Wednesday 10:00 - 19:00</p>
          <p className="contactinfo-times-day">Thursday 10:00 - 19:00</p>
          <p className="contactinfo-times-day">Friday 10:00 - 19:00</p>
          <p className="contactinfo-times-day">Saturday 10:00 - 18:00</p>
          <p className="contactinfo-times-day">Sunday 10:00 - 16:00</p>
        </div>
        <div className="contactinfo-location">
          <div className="contactinfo-location-title">
            <p>Location</p>
            <p>7100 Teckler Blvd</p>
          </div>
          <div className="contactinfo-location-map">
          <iframe className="contactinfo-location-map-display" frameborder="0" Style="border:0" src={URL} allowfullscreen>
</iframe>
          </div>
        </div>
      </div>
    );
  };
}

const URL = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GMAPS}&q=Trading+Post,CrystalLake+IL&zoom=15`;
export default ContactInfo;
