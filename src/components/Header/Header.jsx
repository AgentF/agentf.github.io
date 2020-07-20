import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Forms/FormElements/Button/index';
import Img from '../Forms/FormElements/Img/index';
import defaultUserImage from '../../assets/default-user-image.png';
import './Header.css';

const Header = ({
  loggedIn,
  displayName,
  photoURL,
  setShowSingInModal,
  handleLogOut,
}) => {
  return (
    <header className="header">
      <div className="identification">Agent F Blog</div>
      {loggedIn ? (
        <Button
          className="logout-button"
          title="Logout"
          handleOnclick={handleLogOut}
        >
          <Img className="user-image" src={photoURL || defaultUserImage} />
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

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
  setShowSingInModal: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

Header.defaultProps = {
  displayName: '',
  photoURL: '',
};

export default Header;
