/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './Form.css';
import './SignUp.css';

const SignUp = ({ handleClose, auth }) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    auth.crearCuentaEmailPass(displayName, email, password);
    handleClose();
  };
  // const handleClearForm = e => {
  //   e.preventDefault();
  //   setDisplayName('');
  //   setEmail('');
  //   setPassword('');
  //   setConfirmPassword('');
  // };

  return (
    <form className="sing-up" onSubmit={handleFormSubmit}>
      <h1>Sign Up</h1>
      <Input
        name="name"
        title="Name"
        type="text"
        value={displayName}
        handleChange={e => {
          setDisplayName(e.target.value);
        }}
        placeholder="John Doe"
        autoComplete="name"
      />
      <Input
        name="email"
        title="Email"
        type="text"
        value={email}
        handleChange={e => {
          setEmail(e.target.value);
        }}
        placeholder="john@site.com"
      />
      <Input
        name="password"
        title="Password"
        type="password"
        value={password}
        handleChange={e => {
          setPassword(e.target.value);
        }}
        placeholder="*****"
        autoComplete="new-password"
      />
      <Input
        name="confirmPassword"
        title="Confirm Password"
        type="password"
        value={confirmPassword}
        handleChange={e => {
          setConfirmPassword(e.target.value);
        }}
        placeholder="*****"
        autoComplete="new-password"
      />
      <Button className="confirm-button" handleOnclick={handleFormSubmit}>
        SignUp
      </Button>
    </form>
  );
};

export default SignUp;
