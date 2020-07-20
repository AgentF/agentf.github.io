import React from 'react';
import PropTypes from 'prop-types';
import { Img } from './styles';

const App = ({ src, alt, title }) => {
  return <Img src={src} alt={alt} title={title} />;
};

App.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
};

App.defaultProps = {
  title: '',
};

export default App;
