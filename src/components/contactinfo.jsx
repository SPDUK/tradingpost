import React from 'react';

import '../styles/contactinfo.css';

const URL = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GMAPS}&q=Trading+Post,CrystalLake+IL&zoom=15`;

const ContactInfo = () => {
  return (
    <div className="contactinfo">
      <div className="contactinfo-times">
        <div className="contactinfo-times-title">
          <p>Opening Times</p>
        </div>
        <ul>
        <li className="contactinfo-times-day">Monday 10:00 - 19:00</li>
        <li className="contactinfo-times-day">Tuesday 10:00 - 19:00</li>
        <li className="contactinfo-times-day">Wednesday 10:00 - 19:00</li>
        <li className="contactinfo-times-day">Thursday 10:00 - 19:00</li>
        <li className="contactinfo-times-day">Friday 10:00 - 19:00</li>
        <li className="contactinfo-times-day">Saturday 10:00 - 18:00</li>
        <li className="contactinfo-times-day">Sunday 10:00 - 16:00</li>
        </ul>
      </div>
      <div className="contactinfo-location">
        <div className="contactinfo-location-title">
          <p>Location</p>
          <p>7100 Teckler Blvd</p>
          <a href="tel:8158930218" aria-label="8 1 5. 8 9 3. 0 2 1 8.">(815) 893-0218</a>
        </div>
        <div className="contactinfo-location-map">
          <iframe
            className="contactinfo-location-map-display"
            frameBorder="0"
            src={URL}
            title="Google Maps Trading Post"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
