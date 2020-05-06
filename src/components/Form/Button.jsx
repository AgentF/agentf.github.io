import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, handleOnclick, children }) => {
  return (
    <button className={className} type="button" onClick={handleOnclick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  handleOnclick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
