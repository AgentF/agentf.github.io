import React, { useContext } from 'react';
import {
  Wrapper,
  Logo,
  HorizonalWrapper,
  HeaderButton,
  BellIcon,
  GithubIcon,
  HighBrightnessIcon,
  LowBrightnessIcon,
} from './styles';
import ThemeContext from '../../Contexts/ThemeContext';

export const Header = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Logo>Agent F</Logo>
      <HorizonalWrapper>
        <HeaderButton type="button" onClick={e => e}>
          <BellIcon />
        </HeaderButton>
        <HeaderButton
          type="button"
          onClick={() => {
            window.open('https://github.com/AgentF/agentf.github.io', '_blank');
          }}
        >
          <GithubIcon />
        </HeaderButton>
        <HeaderButton
          type="button"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          {isDarkTheme ? <HighBrightnessIcon /> : <LowBrightnessIcon />}
        </HeaderButton>
      </HorizonalWrapper>
    </Wrapper>
  );
};
