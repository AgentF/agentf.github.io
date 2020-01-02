/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase/app';
import Container from './components/Container';
import 'firebase/analytics';
import firebaseConfig from './config/ConfigFirebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<Container />, document.getElementById('root'));
