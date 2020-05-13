import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './Form.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClearForm = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    handleClearForm();
  };

  return (
    <form className="login" onSubmit={handleFormSubmit}>
      <h1>Login</h1>
      <Input
        name="email"
        title="Email"
        type="text"
        value={email}
        handleChange={e => {
          setEmail(e.target.value);
        }}
        placeholder="john@site.com"
        autoComplete="name"
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
        autoComplete="current-password"
      />
      <Button className="confirm-button" handleOnclick={handleFormSubmit}>
        Login
      </Button>
    </form>
  );
};

export default Login;
