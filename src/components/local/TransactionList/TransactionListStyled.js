import styled from 'styled-components';

import TransactionList from './TransactionList';
import { media } from '../../../helpers/styles/styles';

const TransactionListStyled = styled(TransactionList)`
  padding: 20px 10px;

  ${media.medium`
    width: 40%;
    `}

`

export default TransactionListStyled;