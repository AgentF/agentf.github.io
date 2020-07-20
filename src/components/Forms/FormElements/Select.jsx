import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, title, value, handleChange, placeholder, options }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{title}</label>
      <select name={name} value={value} onChange={handleChange}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Select;
