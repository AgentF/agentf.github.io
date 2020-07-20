import React from 'react';
import PropTypes from 'prop-types';
import { MdAccountCircle } from 'react-icons/md';
import { Header, Logo, HeaderButton, Avatar, UserName } from './styles';

const App = ({
  loggedIn,
  displayName,
  photoURL,
  setShowSingInModal,
  handleLogOut,
}) => {
  return (
    <Header>
      <Logo className="identification">Agent F Blog</Logo>
      {loggedIn ? (
        <HeaderButton title="Logout" onClick={handleLogOut}>
          {photoURL ? <Avatar src={photoURL} /> : <MdAccountCircle />}
          <UserName>{displayName}</UserName>
        </HeaderButton>
      ) : (
        <HeaderButton
          onClick={() => {
            setShowSingInModal(true);
          }}
        >
          <UserName>Login</UserName>
        </HeaderButton>
      )}
    </Header>
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
  setShowSingInModal: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

App.defaultProps = {
  displayName: '',
  photoURL: '',
};

export default App;
