import React from 'react';
import PropTypes from 'prop-types';
import View from './View';

/*
  This index.jsx component has exactly one and only one function
  to render the top-most component either of Container, Manager
  or View, thats all, this allows simplicity to call this
  component via import to this folder ../src/components/folder
  the logic can be managed in other component(s).
*/

const Header = ({
  loggedIn,
  displayName,
  photoURL,
  setShowModal,
  setNotificationMessage,
}) => (
  <View
    loggedIn={loggedIn}
    displayName={displayName}
    photoURL={photoURL}
    setShowModal={setShowModal}
    setNotificationMessage={setNotificationMessage}
  />
);

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
  setShowModal: PropTypes.func.isRequired,
  setNotificationMessage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  displayName: '',
  photoURL: '',
};
export default Header;
