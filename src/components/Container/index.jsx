import React, { useContext } from 'react';
import { Wrapper, ProjectsList } from './styles';
import { Project } from '../Project';
import ProjectsContext from '../../Contexts/ProjectsContext';

export const Container = () => {
  const {
    projects: { data },
  } = useContext(ProjectsContext);
  return (
    <Wrapper>
      <ProjectsList>
        {data.map(({ desc, id, imgUrl, links, title }) => (
          <Project
            key={id}
            desc={desc}
            id={id}
            imgUrl={imgUrl}
            links={links}
            title={title}
          />
        ))}
      </ProjectsList>
    </Wrapper>
  );
};
