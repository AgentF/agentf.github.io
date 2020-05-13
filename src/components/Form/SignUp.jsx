import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './Form.css';
import './SignUp.css';

const SignUp = () => {
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

  const handleFormSubmit = e => {
    e.preventDefault();
    handleClearForm();
  };

  return (
    <form className="sing-up" onSubmit={handleFormSubmit}>
      <h1>Sign Up</h1>
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
      <Button className="confirm-button" handleOnclick={handleFormSubmit}>
        SignUp
      </Button>
    </form>
  );
};

export default SignUp;
