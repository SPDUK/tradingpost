import React from 'react';
import '../styles/contactbuttoncomponent.css';

const ContactButtonComponent = (props) => {
  return (
    <div className="contactbuttoncomponent">
      <div onKeyDown={props.componentButtonClick}  role="Button" tabIndex="0" onClick={props.componentButtonClick} className="contactbuttoncomponent-x">
        <span>X</span>
      </div>
      <div className="contactbuttoncomponent-left">
        left
      </div>
      <div className="contactbuttoncomponent-right">
        right
      </div>
    </div>
  );
};

export default ContactButtonComponent;
