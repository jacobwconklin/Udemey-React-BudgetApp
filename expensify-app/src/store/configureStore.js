import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const storeMaker = () => {
    // store creation
    const store = createStore(
    combineReducers({ // combineReduceres takes in an object, showing the value on the left and the reducer to manage
      // it on the right. Takes a root value and decides what reducer it goes to. 
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

export default storeMaker;
