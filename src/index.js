/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { GlobalStyle } from './styles/GlobalStyle';
import { ProjectsProvider } from './Contexts/ProjectsContext';
import ThemeContext, { ThemeProvider } from './Contexts/ThemeContext';
import { Header } from './components/Header';
import { Container } from './components/Container';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
});

const App = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <Header />
      <Container />
    </>
  );
};

ReactDOM.render(
  <ThemeProvider>
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
