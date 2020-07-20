import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

const App = ({ className, handleOnclick, disabled, title, id, children }) => {
  return (
    <Button
      className={className}
      disabled={disabled}
      title={title}
      id={id}
      type="button"
      onClick={handleOnclick}
    >
      {children}
    </Button>
  );
};

App.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  handleOnclick: PropTypes.func.isRequired,
};

App.defaultProps = {
  className: '',
  title: '',
  id: '',
};

export default App;
