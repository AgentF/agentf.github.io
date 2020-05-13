/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import Container from './components/Container';
import configFirebase from './config/ConfigFirebase';

firebase.initializeApp(configFirebase);

ReactDOM.render(<Container />, document.getElementById('root'));
