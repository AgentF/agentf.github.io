import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import Image from './Image';
import Autentication from '../../auth/autentication';
import FacebookImage from '../../assets/Facebook.jpg';
import GoogleImage from '../../assets/Google.jpg';
import TwitterImage from '../../assets/Twitter.png';
import './Form.css';
import './SignUpLogin.css';

const SignUpLogin = ({ handleClose, setNotificationMessage }) => {
  const [option, setOption] = useState('Login');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');

  const handleClearForm = e => {
    e.preventDefault();
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
      Autentication.authEmailPass(
        inputEmail,
        inputPassword,
        setNotificationMessage,
      );
    } else if (option === 'Sign Up' && passwordValidation()) {
      Autentication.crearCuentaEmailPass(
        inputName,
        inputEmail,
        inputPassword,
        setNotificationMessage,
      );
    } else if (option === 'Sign Up' && !passwordValidation()) {
      setNotificationMessage('Passwords dont match!');
      setInputPassword('');
      setInputConfirmPassword('');
    }
    handleClearForm();
    handleClose();
  };

  return (
    <form className="sing-up-login" onSubmit={handleFormSubmit}>
      <div className="modal-header">
        <div className="option-selection">
          <Button
            className="clear-button"
            disabled={option === 'Login'}
            handleOnclick={() => {
              setOption('Login');
            }}
          >
            <h1>Login</h1>
          </Button>
          <Button
            className="clear-button"
            disabled={option === 'Sign Up'}
            handleOnclick={() => {
              setOption('Sign Up');
            }}
          >
            <h1>Sign Up</h1>
          </Button>
        </div>
        <Button className="modal-close" handleOnclick={handleClose}>
          <i className="material-icons">close</i>
        </Button>
      </div>
      {option === 'Sign Up' && (
        <Input
          name="name"
          title="Name"
          type="text"
          value={inputName}
          handleChange={e => {
            setInputName(e.target.value);
          }}
          placeholder="John Doe"
          autoComplete="name"
        />
      )}
      <Input
        name="email"
        title="Email"
        type="text"
        value={inputEmail}
        handleChange={e => {
          setInputEmail(e.target.value);
        }}
        placeholder="john@site.com"
      />
      <Input
        name="password"
        title="Password"
        type="password"
        value={inputPassword}
        handleChange={e => {
          setInputPassword(e.target.value);
        }}
        placeholder="*****"
        autoComplete="new-password"
      />
      {option === 'Sign Up' && (
        <Input
          name="confirmPassword"
          title="Confirm Password"
          type="password"
          value={inputConfirmPassword}
          handleChange={e => {
            setInputConfirmPassword(e.target.value);
          }}
          placeholder="*****"
          autoComplete="new-password"
        />
      )}

      <div className="direct-credentials">
        <Button
          className="clear-button"
          handleOnclick={() => {
            Autentication.authFacebook(setNotificationMessage, handleClose);
          }}
        >
          <Image
            className="auto-login-image"
            src={FacebookImage}
            title="Continue with Facebook"
            alt="Continue with Facebook"
          />
        </Button>
        <Button
          className="clear-button"
          handleOnclick={() => {
            Autentication.authGoogle(setNotificationMessage, handleClose);
          }}
        >
          <Image
            className="auto-login-image"
            src={GoogleImage}
            title="Continue with Google"
            alt="Continue with Google"
          />
        </Button>
        {false && (
          <Button
            className="clear-button"
            handleOnclick={() => {
              Autentication.authTwitter(setNotificationMessage, handleClose);
            }}
          >
            <Image
              className="auto-login-image"
              src={TwitterImage}
              title="Continue with Twitter"
              alt="Continue with Twitter"
            />
          </Button>
        )}
      </div>
      <Button
        className="confirm-button"
        handleOnclick={handleFormSubmit}
        disabled={formValidation}
        title={formValidation() ? option : 'Fill the form'}
      >
        {option}
      </Button>
    </form>
  );
};

SignUpLogin.propTypes = {
  handleClose: PropTypes.func.isRequired,
  setNotificationMessage: PropTypes.func.isRequired,
};

export default SignUpLogin;