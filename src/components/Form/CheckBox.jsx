import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ name, title, options, handleChange, selectedOptions }) => {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <div className="checkbox-group">
        {options.map(option => {
          return (
            <label htmlFor={option} key={option}>
              <input
                className="form-checkbox"
                id={name}
                name={name}
                onChange={handleChange}
                value={option}
                checked={selectedOptions.indexOf(option) > -1}
                type="checkbox"
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default CheckBox;
