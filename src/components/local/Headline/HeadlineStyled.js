import styled from 'styled-components';

import Headline from './Headline';
import { setColor } from '../../../helpers/styles/styles';

const HeadlineStyled = styled(Headline)`
  padding: 25px 0;
  text-align: center;
  p {
    padding-bottom: 10px;
  }
  span {
    color: ${setColor.mainWhite}
  }
`

export default HeadlineStyled;