import { css, keyframes } from 'styled-components';

const blurInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }

    to {
        filter: blur(0);
        opacity: 1;
    }
`;

export const blurIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${blurInKeyframes} ${type};
  `;
