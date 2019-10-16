import React from 'react';

import { SubTitle } from '../../global/Titles/Titles'

const TransactionResults = ({ className, sumAll, topTransaction }) => {
  const { name, converter, euroValue, plnValue } = topTransaction;
  return (
    <>
      {sumAll > 0 && topTransaction.plnValue > 0 &&
        <div className={className}>
          <SubTitle>Results: </SubTitle>
          <SubTitle small>Sum of all transactions: <span className="sumAll">{sumAll.toFixed(2)} zł</span></SubTitle>
          <div className="topTransaction">
            <SubTitle small>Top transaction</SubTitle>
            <div className="topTransaction-info">
              <p><span>transaction name:</span> {name}</p>
              <p><span>converter:</span> 1€ = {converter} zł</p>
              <p><span>euro:</span> {euroValue} €</p>
              <p><span>pln:</span> {plnValue.toFixed(2)} zł</p>
            </div>
          </div>
        </div>}
    </>
  );
}

export default TransactionResults;