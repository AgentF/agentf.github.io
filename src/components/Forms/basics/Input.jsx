import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  title,
  type,
  value,
  handleChange,
  placeholder,
  autocomplete,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <input
        className="form-input"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete={autocomplete}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  autocomplete: PropTypes.string,
};

Input.defaultProps = {
  autocomplete: 'username',
};
export default Input;
