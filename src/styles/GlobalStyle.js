import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    #root {
        --primaryColor: ${({ isDarkTheme }) =>
          isDarkTheme ? '#333333' : '#4CAF50'};
        --primaryTextColor:  ${({ isDarkTheme }) =>
          isDarkTheme ? '#FFFFFF' : 'rgba(0, 0, 0, 0.87)'};
        --secondaryTextColor:  ${({ isDarkTheme }) =>
          isDarkTheme ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.54)'};
        --headerSize: 65px;
        --backgroundColor: ${({ isDarkTheme }) =>
          isDarkTheme ? '#212121' : '#F5F5F5'};
        --cardColor: ${({ isDarkTheme }) =>
          isDarkTheme ? '#333333' : '#FFFFFF'};
        --borderRadius: 3px;
    }
`;
