import styled from 'styled-components';

import Form from './Form';
import { media } from '../../../helpers/styles/styles'

const FormStyled = styled(Form)`
form {
  text-align: center;
}
p {
  font-size: 12px;
  color: red;
}

${media.medium`
 width: 40%;
  `}

`

export default FormStyled;