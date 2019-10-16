import * as types from '../types/transactionTypes';

const initialState = {
  transactions: [],
  converter: 4,
}

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TRANS:
      const transaction = {
        id: Math.random(),
        name: action.name,
        euroValue: action.euroValue,
        converter: action.converter,
        plnValue: Math.round(action.converter * action.euroValue * 1e2) / 1e2
      };
      return {
        ...state,
        transactions: [...state.transactions, transaction]
      }
    case types.REMOVE_TRANS:
      const newTransactions = state.transactions.filter(trans => trans.id !== action.id);
      return {
        ...state,
        transactions: newTransactions
      }
    case types.DEFINE_CONVERTER:
      return {
        ...state,
        converter: action.converter
      }
    case types.CHANGE_CONVERTER:
      const changedTransactions = state.transactions.map(trans => {
        trans = {
          ...trans,
          converter: action.newConverter,
          plnValue: Math.round(action.newConverter * trans.euroValue * 1e2) / 1e2
        }
        return trans;
      })
      return {
        ...state,
        transactions: changedTransactions,
        converter: action.newConverter
      }
    default:
      return state;
  }
}

export default transactionReducer;