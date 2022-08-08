 // Using multiple Reducers helps simplify things

  // can create a variable for the defualt state to avoid a ton of code in the arguments list of the function
  const expensesReducerDefaultState = [];

  // Expenses Reducer
  const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
      case 'ADD_EXPENSE':
        // return state.concat(action.expense); // This makes new array and returns it, leaving state intact and unchanged.
        // Instead of concat he uses the spread operator. it uses the ... to add all of the items of an array. USED IN ALLCONNECT-WP
        // ex [ 'adam', ...names, 'mike'] puts adam first, then all names from names, then mike, then returns the new array.
        return [...state, action.expense];
      case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id ); // filter doesn't change state returns new array
      case 'EDIT_EXPENSE':
        return state.map(( expense ) => {
          if (expense.id === action.id) {
            return { // return new object with updates
              ...action.update // This will override any properties with the same name from state
            };
          } else {
            return expense;
          }
        });
      default:
        return state;
    }
  };


  export default expensesReducer;