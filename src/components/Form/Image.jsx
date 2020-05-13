import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const Image = ({ className, src, alt, title }) => {
  return <img className={className} src={src} alt={alt} title={title} />;
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Image.defaultProps = {
  className: '',
  title: '',
};

export default Image;
