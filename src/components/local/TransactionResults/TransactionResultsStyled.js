import styled from 'styled-components';

import TransactionResults from './TransactionResults';
import { setColor, media } from '../../../helpers/styles/styles';

const TransactionResultsStyled = styled(TransactionResults)`
  padding: 20px 10px;

  .sumAll {
    font-size: 24px;
    color: ${setColor.mainWhite};
  }

  .topTransaction {
    margin: 30px 0 0;
  }

  .topTransaction-info {
    width: 80%;
    margin: 15px auto;
    padding: 20px 10px;
    text-align: center;
    background: ${setColor.mainGreen};
    span {
      font-size: 14px;
      color: ${setColor.subGreen};
    }
  }

  ${media.small`
  .topTransaction-info {
    width: 65%;
    `}

  ${media.medium`
  width: 40%;
  `}

`

export default TransactionResultsStyled;