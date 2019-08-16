import React from 'react';
import Container from './Container';

/*
  This index.jsx component has exactly one and only one function
  to render the top-most component either of Container, Manager
  or View, thats all, this allows simplicity to call this
  component via import to this folder ../src/components/folder
  the logic can be managed in other component(s).
*/

const UnderConstruction = () => <Container />;
export default UnderConstruction;
