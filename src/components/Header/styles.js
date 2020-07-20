import styled from 'styled-components';
import { Button } from '../Forms/FormElements/Button/styles';
import { Img } from '../Forms/FormElements/Img/styles';

export const Header = styled.header`
  padding: 5px 10px;
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.div`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
`;

export const HeaderButton = styled(Button)`
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Avatar = styled(Img)`
  height: 50px;
  border-radius: 50%;
  margin: 0.1rem 0.2rem;
`;

export const UserName = styled.span`
  color: #fff;
  font-size: 1.2rem;
  margin: 0.1rem 0.2rem;
`;
