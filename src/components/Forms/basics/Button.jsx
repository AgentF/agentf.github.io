import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  className,
  handleOnclick,
  disabled,
  title,
  id,
  children,
}) => {
  return (
    <button
      className={className}
      disabled={disabled}
      title={title}
      id={id}
      type="button"
      onClick={handleOnclick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  handleOnclick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
  title: '',
  id: '',
};

export default Button;
