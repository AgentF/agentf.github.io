/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import Container from './components/Container';
import firebaseConfig from './config/ConfigFirebase';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<Container />, document.getElementById('root'));
