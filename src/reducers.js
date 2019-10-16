import { combineReducers } from 'redux';
import transactionReducer from './pages/Home/store/reducers/transactionReducer';

const rootReducer = combineReducers({
  cantor: transactionReducer,
})

export default rootReducer;