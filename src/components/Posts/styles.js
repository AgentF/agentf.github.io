import styled from 'styled-components';

export const PostsList = styled.ul`
  --postWidth: 275px;
  list-style: none;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(var(--postWidth), 100%), 1fr)
  );
  gap: 1rem;
`;
