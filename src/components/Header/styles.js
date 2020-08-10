import styled from 'styled-components';
import { GoBell, GoMarkGithub } from 'react-icons/go';
import { MdBrightness4, MdBrightness7 } from 'react-icons/md';

export const Wrapper = styled.header`
  --headerTextColor: #fff;
  --verticalPadding: 0.5rem;
  --horizontalPadding: 1rem;
  padding: var(--verticalPadding) var(--horizontalPadding);
  background: var(--primaryColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
  height: calc(var(--headerSize) - var(--verticalPadding) * 2);
  width: calc(100vw - var(--horizontalPadding) * 2);
  position: fixed;
  top: 0;
`;

export const Logo = styled.h2`
  color: var(--headerTextColor);
`;

export const HorizonalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderButton = styled.button`
  --iconSize: 1.5rem;
  border: none;
  background: transparent;
  padding: 0.5rem;
  margin: 0.5rem 0 0.5rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BellIcon = styled(GoBell)`
  color: var(--headerTextColor);
  height: var(--iconSize);
  width: var(--iconSize);
`;

export const GithubIcon = styled(GoMarkGithub)`
  color: var(--headerTextColor);
  height: var(--iconSize);
  width: var(--iconSize);
`;

export const HighBrightnessIcon = styled(MdBrightness7)`
  color: var(--headerTextColor);
  height: var(--iconSize);
  width: var(--iconSize);
`;

export const LowBrightnessIcon = styled(MdBrightness4)`
  color: var(--headerTextColor);
  height: var(--iconSize);
  width: var(--iconSize);
`;
