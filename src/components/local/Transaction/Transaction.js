import React from 'react';

import { ButtonRemove } from '../../global/Button/Button';

const Transaction = ({ className, transaction, removeTransaction }) => {
  const { id, name, euroValue, plnValue, converter } = transaction;
  return (
    <li className={className}>
      <p><span>transaction name:</span> {name}</p>
      <p><span>converter:</span> 1€ = {converter} zł</p>
      <p><span>euro:</span> {euroValue} €</p>
      <p><span>pln:</span> {plnValue.toFixed(2)} zł</p>
      <div className="button">
        <ButtonRemove onClick={() => removeTransaction(id)}>remove</ButtonRemove>
      </div>
    </li>
  );
}

export default Transaction;