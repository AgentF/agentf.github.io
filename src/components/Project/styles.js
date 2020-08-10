import styled from 'styled-components';
import { AiOutlineLink } from 'react-icons/ai';
import { FaTrello } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

export const Wrapper = styled.li`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: var(--cardColor);
  border-radius: var(--borderRadius);
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
`;
export const Img = styled.img`
  max-width: 100%;
`;
export const Title = styled.h3`
  color: var(--primaryTextColor);
`;

export const Desc = styled.p`
  color: var(--secondaryTextColor);
`;

export const ButtonLinkList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkButton = styled.button`
  --iconSize: 1.5rem;
  border: none;
  background: transparent;
  padding: 0.5rem;
  margin: 0.5rem 0 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkIcon = styled(AiOutlineLink)`
  color: var(--primaryTextColor);
  height: var(--iconSize);
  width: var(--iconSize);
`;

export const TrelloIcon = styled(FaTrello)`
  color: var(--primaryTextColor);
  height: var(--iconSize);
  width: var(--iconSize);
`;

export const GithubIcon = styled(GoMarkGithub)`
  color: var(--primaryTextColor);
  height: var(--iconSize);
  width: var(--iconSize);
`;

export const LinkName = styled.p`
  color: var(--primaryTextColor);
`;
