import * as types from '../types/transactionTypes';

export const add = (name, euroValue, converter) => ({
  type: types.ADD_TRANS, name, euroValue, converter
});

export const remove = id => ({
  type: types.REMOVE_TRANS, id
});

export const defineConverter = converter => ({
  type: types.DEFINE_CONVERTER, converter
});

export const changeConverter = newConverter => ({
  type: types.CHANGE_CONVERTER, newConverter
});


