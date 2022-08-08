import {v1} from 'uuid';

// ADD_EXPENSE
  // destructure first argument, if it doesn't exist destructure an empty object
  export const addExpense = ({ 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: v1(), // Generate unique id with uuid package installed later come from database
    description,
    note,
    amount,
    createdAt
  }

});

// REMOVE_EXPENSE
// destructure out id and require it so no fallback default values
export const removeExpense = ({ id } = {}) =>{ 
  return ({
  type: 'REMOVE_EXPENSE',
  id
}); }

// EDIT_EXPENSE
export const editExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
});