import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Form/Button';
import Image from '../Form/Image';
import firebaseAuth from '../../APIs/firebaseAuth';
import defaultUserImage from '../../assets/default-user-image.png';
import './View.css';

const View = ({
  loggedIn,
  displayName,
  photoURL,
  setShowSingInModal,
  setNotificationMessage,
}) => {
  return (
    <header className="header">
      <div className="identification">Agent F Blog</div>
      {loggedIn ? (
        <Button
          className="logout-button"
          title="Logout"
          handleOnclick={() => firebaseAuth.logOut(setNotificationMessage)}
        >
          <Image className="user-image" src={photoURL || defaultUserImage} />
          <span className="display-name">{displayName}</span>
        </Button>
      ) : (
        <div>
          <Button
            className="header-button"
            handleOnclick={() => {
              setShowSingInModal(true);
            }}
          >
            Login
          </Button>
        </div>
      )}
    </header>
  );
};

View.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
  setShowSingInModal: PropTypes.func.isRequired,
  setNotificationMessage: PropTypes.func.isRequired,
};

View.defaultProps = {
  displayName: '',
  photoURL: '',
};

export default View;
