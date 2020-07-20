import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { GrFacebook, GrTwitter } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';

import {
  SignUpLogin,
  Header,
  Options,
  OptionButton,
  OptionName,
  CloseButton,
  InputGroup,
  InputLabel,
  Input,
  ConfirmButton,
  AuthHelpersTitle,
  AuthHelpers,
  AuthHelperButton,
} from './styles';

const App = ({
  handleClose,
  handleLogIn,
  handleSingUp,
  handleFacebookAuth,
  handleGoogleAuth,
  handleTwitterAuth,
  setNotificationMessage,
}) => {
  const [option, setOption] = useState('Login');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');

  const handleClearForm = () => {
    setInputName('');
    setInputEmail('');
    setInputPassword('');
    setInputConfirmPassword('');
  };

  const passwordValidation = () => {
    return inputPassword === inputConfirmPassword;
  };

  const formValidation = () => {
    let isItOK = false;
    if (option === 'Login' && inputEmail && inputPassword) {
      isItOK = true;
    } else if (
      option === 'Sign Up' &&
      passwordValidation() &&
      inputName &&
      inputEmail &&
      inputPassword &&
      inputConfirmPassword
    ) {
      isItOK = true;
    }

    return isItOK;
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (option === 'Login') {
      handleLogIn(inputEmail, inputPassword);
    } else if (option === 'Sign Up' && passwordValidation()) {
      handleSingUp(inputName, inputEmail, inputPassword);
    } else if (option === 'Sign Up' && !passwordValidation()) {
      setNotificationMessage('Passwords dont match!');
      setInputPassword('');
      setInputConfirmPassword('');
    }
    handleClearForm();
    handleClose();
  };

  return (
    <SignUpLogin onSubmit={handleFormSubmit}>
      <Header>
        <Options>
          <OptionButton
            disabled={option === 'Login'}
            onClick={() => {
              setOption('Login');
            }}
          >
            <OptionName>Login</OptionName>
          </OptionButton>
          <OptionButton
            disabled={option === 'Sign Up'}
            onClick={() => {
              setOption('Sign Up');
            }}
          >
            <OptionName>Sign Up</OptionName>
          </OptionButton>
        </Options>
        <CloseButton onClick={handleClose}>
          <MdClose />
        </CloseButton>
      </Header>
      {option === 'Sign Up' && (
        <InputGroup>
          <InputLabel htmlFor="name">Name:</InputLabel>
          <Input
            name="name"
            title="Name"
            type="text"
            value={inputName}
            onChange={e => {
              setInputName(e.target.value);
            }}
            placeholder="John Doe"
            autoComplete="name"
          />
        </InputGroup>
      )}
      <InputGroup>
        <InputLabel htmlFor="email">Email:</InputLabel>
        <Input
          name="email"
          title="Email"
          type="text"
          value={inputEmail}
          onChange={e => {
            setInputEmail(e.target.value);
          }}
          placeholder="john@site.com"
        />
      </InputGroup>
      <InputGroup>
        <InputLabel htmlFor="password">Password:</InputLabel>
        <Input
          name="password"
          title="Password"
          type="password"
          value={inputPassword}
          onChange={e => {
            setInputPassword(e.target.value);
          }}
          placeholder="*****"
          autoComplete="new-password"
        />
      </InputGroup>
      {option === 'Sign Up' && (
        <InputGroup>
          <InputLabel htmlFor="confirmPassword">Confirm Password:</InputLabel>
          <Input
            name="confirmPassword"
            title="Confirm Password"
            type="password"
            value={inputConfirmPassword}
            onChange={e => {
              setInputConfirmPassword(e.target.value);
            }}
            placeholder="*****"
            autoComplete="new-password"
          />
        </InputGroup>
      )}
      <ConfirmButton
        className="confirm-button"
        onClick={handleFormSubmit}
        title={formValidation() ? option : 'Fill the form'}
      >
        {option}
      </ConfirmButton>
      <AuthHelpersTitle>Continue with...</AuthHelpersTitle>
      <AuthHelpers>
        <AuthHelperButton type="button" onClick={handleFacebookAuth}>
          <GrFacebook color="#3b5998" />
        </AuthHelperButton>
        <AuthHelperButton type="button" onClick={handleGoogleAuth}>
          <FcGoogle />
        </AuthHelperButton>
        {false && (
          <AuthHelperButton type="button" onClick={handleTwitterAuth}>
            <GrTwitter color="#00acee" />
          </AuthHelperButton>
        )}
      </AuthHelpers>
    </SignUpLogin>
  );
};

App.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleLogIn: PropTypes.func.isRequired,
  handleSingUp: PropTypes.func.isRequired,
  handleFacebookAuth: PropTypes.func.isRequired,
  handleGoogleAuth: PropTypes.func.isRequired,
  handleTwitterAuth: PropTypes.func.isRequired,
  setNotificationMessage: PropTypes.func.isRequired,
};

export default App;
