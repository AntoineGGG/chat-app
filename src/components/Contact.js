import React from 'react';
import './Contact.css';
import propTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online,
    };
  }
  render() {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} />
        <div>
          <p className='name'> {this.props.name}</p>
          <div className='status'>
            <div
              className={this.state.online ? 'status-online' : 'status-offline'}
            ></div>
            <p
              className='status-text'
              onClick={(event) => {
                const switchOffline = !this.state.online;
                this.setState({ online: switchOffline });
              }}
            >
              {this.state.online ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
Contact.propTypes = {
  img: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
  statusText: propTypes.string.isRequired,
};
export default Contact;
