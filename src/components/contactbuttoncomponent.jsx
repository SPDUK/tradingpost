import React from 'react';
import '../styles/contactbuttoncomponent.css';

const ContactButtonComponent = (props) => {
  return (
    <div className="contactbuttoncomponent">
      <div onKeyDown={props.contactButtonClick} role="Button" tabIndex="0" onClick={props.contactButtonClick} className="contactbuttoncomponent-x">
        <span></span>
        <span></span>
      </div>
      <div className="contactbuttoncomponent-top">
        <p>We buy sell and trade almost <span>everything.</span> Electronics, antiques, tools, musical instruments, sports equipment and appliances.</p>
        <p>Everything is always priced to go! You are sure to find unusual and different products, as well as those household essentials at prices you can <span>afford.</span></p>
      </div>
      <div className="contactbuttoncomponent-bottom">
        <ul>
        <li className="contactbuttoncomponent-bottom-phone">Phone: <a href="tel:8158930218" aria-label="8 1 5. 8 9 3. 0 2 1 8.">(815) 893-0218</a></li>
          <li className="contactbuttoncomponent-bottom-button">Our Location and Opening Times</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactButtonComponent;
