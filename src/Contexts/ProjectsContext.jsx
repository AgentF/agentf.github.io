import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { usePostsData } from '../hooks/usePostsData';

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, loading, error, reloaded, setReloaded] = usePostsData();

  const reload = () => setReloaded(reloaded + 1);

  return (
    <ProjectsContext.Provider
      value={{
        projects: { data: projects, loading, error },
        reload,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

ProjectsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProjectsContext;
