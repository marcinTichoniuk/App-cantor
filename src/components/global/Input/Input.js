import styled from 'styled-components';
import { setColor } from '../../../helpers/styles/styles';

export const Input = styled.input.attrs(props => ({
  type: props.type || 'text',
  placeholder: props.placeholder || null,
  name: props.name,
  value: props.value
}))`
width: 75%;
padding: 8px;
margin: 10px;
font-size: 16px;
border: 1px solid ${setColor.mainWhite};
outline: none;
`