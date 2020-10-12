import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='Contact'>
      <img
        className='avatar'
        src='https://randomuser.me/api/portraits/women/38.jpg'
      />
      <div>
        <p className='name'>Audrey Machin</p>
        <div className='status'>
          <div className='status-online'></div>
          <p className='status-text'>Online</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
