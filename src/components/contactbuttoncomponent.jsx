import React, { Component } from 'react';
import '../styles/contactbuttoncomponent.css';

class ContactButtonComponent extends Component {
  render() {
    return (
      <div className="contactbuttoncomponent">
        <div onClick={this.props.componentButtonClick} className="contactbuttoncomponent-x">

          CLICK
        </div>
      </div>
    );
  }
}

export default ContactButtonComponent;
