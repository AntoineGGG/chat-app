import React from 'react';
import './Contact.css';
import propTypes from 'prop-types';

function Contact(props) {
  return (
    <div className='Contact'>
      <img className='avatar' src={props.avatar} />
      <div>
        <p className='name'> {props.name}</p>
        <div className='status'>
          <div
            className={props.online ? 'status-online' : 'status-offline'}
          ></div>
          <p className='status-text'>{props.online ? 'Online' : 'Offline'}</p>
        </div>
      </div>
    </div>
  );
}
Contact.propTypes = {
  img: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
  statusText: propTypes.string.isRequired,
};
export default Contact;
