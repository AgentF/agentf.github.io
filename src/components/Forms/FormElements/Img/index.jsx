import React from 'react';
import PropTypes from 'prop-types';

const App = ({ className, src, alt, title }) => {
  return <img className={className} src={src} alt={alt} title={title} />;
};

App.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
};

App.defaultProps = {
  className: '',
  title: '',
};

export default App;
