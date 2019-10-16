import styled from 'styled-components';
import { setColor, setFont } from '../../../helpers/styles/styles';

export const Button = styled.button`
  padding: 6px 20px;
  margin: 15px 0;
  background-color: ${setColor.subBlack};
  color: ${setColor.mainWhite};
  box-shadow: 0 0 0 2px ${setColor.mainWhite};
  border: none;
  outline: none;
  font-family: ${setFont.main};
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${setColor.mainWhite};
    color: ${setColor.mainBlack}; 
  }
`

export const ButtonRemove = styled(Button)`
margin: 15px 0 0;
background-color: ${setColor.mainGreen};
box-shadow: 0 0 0 2px ${setColor.mainRed};
&:hover {
    background-color: ${setColor.mainRed};
    color: ${setColor.mainWhite}; 
  }
`