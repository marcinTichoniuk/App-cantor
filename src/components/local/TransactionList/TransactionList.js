import React from 'react';

import Transaction from '../Transaction/TransactionStyled';
import { SubTitle } from '../../global/Titles/Titles'

const TransactionList = ({ className, transactions, removeTransaction }) => {

  const newTransactions = transactions.map(trans => (
    <Transaction key={trans.id} transaction={trans} removeTransaction={removeTransaction} />
  ))

  return (
    <div className={className}>
      <SubTitle>List of transactions ({transactions.length})</SubTitle>
      <ul>
        {newTransactions}
      </ul>
    </div>
  );
}

export default TransactionList;