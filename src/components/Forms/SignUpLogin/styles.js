import styled from 'styled-components';
import { Button } from '../FormElements/Button/styles';

export const SignUpLogin = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  --headerButtonsSize: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const OptionButton = styled(Button)`
  background-color: ${({ disabled }) => (disabled ? 'transparent' : '#E0E0E0')};
  border: none;
  border-radius: 0;
  height: var(--headerButtonsSize);
  flex: 1;
  margin: 0;
`;

export const OptionName = styled.span`
  font-size: 1.2rem;
`;

export const CloseButton = styled(Button)`
  --color: #e53935;
  background-color: #fff;
  height: var(--headerButtonsSize);
  width: var(--headerButtonsSize);
  margin: 0;
  border-color: var(--color);

  & svg {
    color: var(--color);
    height: calc(var(--headerButtonsSize) * 0.75);
    width: calc(var(--headerButtonsSize) * 0.75);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1fr;
  padding: 0.2rem;
`;

export const InputLabel = styled.label`
  font-size: 1.1rem;
`;

export const Input = styled.input`
  border: none;
  font-size: 1rem;
`;

export const ConfirmButton = styled(Button)`
  --color: #43a047;
  border-color: var(--color);
  color: var(--color);
  font-size: 1.2rem;
`;

export const AuthHelpersTitle = styled.span`
  margin: 0.5rem 0;
  font-size: 1.2rem;
`;

export const AuthHelpers = styled.div`
  display: flex;
`;

export const AuthHelperButton = styled(Button)`
  --size: 3rem;
  height: var(--size);
  width: var(--size);
  border: none;
  & svg {
    height: calc(var(--size) * 0.75);
    width: calc(var(--size) * 0.75);
  }
`;
