import styled from 'styled-components';

import Transaction from './Transaction';
import { setColor, media } from '../../../helpers/styles/styles';

const TransactionStyled = styled(Transaction)`
  width: 90%;
  margin: 15px auto;
  padding: 20px 10px;
  background: ${setColor.mainGreen};
  text-align: center;
 
  span {
    font-size: 14px;
    color: ${setColor.subGreen}
  }
  .button {
    text-align: center; 
  }

  ${media.small`
  width: 75%;
  `}

`

export default TransactionStyled;