import styled from 'styled-components';

export const Wrapper = styled.div`
  --padding: 0.5rem;
  margin-top: var(--headerSize);
  padding: var(--padding);

  height: calc(100vh - var(--headerSize) - var(--padding) * 2);
  width: calc(100vw - var(--padding) * 2);

  background-color: var(--backgroundColor);
  transition: 0.3s ease-in-out;
`;

export const ProjectsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fill, min(300px, 90vw));

  max-height: 100%;
  width: 100%;
  overflow-y: auto;

  justify-content: center;
`;
