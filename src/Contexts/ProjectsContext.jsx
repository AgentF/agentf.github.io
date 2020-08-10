import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { ProjectsReducer } from './ProjectsReducer';

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [{ data: projects }, projectsDispatcher] = useReducer(ProjectsReducer, {
    type: 'RESET_DATA',
    data: [],
  });

  const addElement = data => projectsDispatcher({ type: 'ADD_ELEMENT', data });
  const removeElement = data =>
    projectsDispatcher({ type: 'REMOVE_ELEMENT', data });
  const updateElement = data =>
    projectsDispatcher({ type: 'UPDATE_ELEMENT', data });

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        addElement,
        removeElement,
        updateElement,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

ProjectsProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default ProjectsContext;
