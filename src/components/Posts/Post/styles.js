import styled from 'styled-components';
import { Button } from '../../Forms/FormElements/Button/styles';
import { blurIn } from '../../../styles/animations';

export const PostWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.2);
  min-height: 200px;
  padding: 0.5rem;
`;

export const ImgWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;

export const Img = styled.img`
  ${blurIn({ time: '3s' })};
  height: 150px;
  width: auto;
  max-width: 100%;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const Title = styled.span`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Desc = styled.div`
  margin: 0.2rem 0;
`;

export const EditOptions = styled.div`
  display: flex;
`;

export const EditOption = styled(Button)`
  & svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const LinkOptions = styled.div`
  display: flex;
`;

export const LinkOption = styled(Button)`
  & svg {
    height: 2rem;
    width: 2rem;
  }
`;
