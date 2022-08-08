  // Links use client side routing as opposed to hrefs that use server side routing pulling a brand new index.html file from the server
  // taking much longer. 
  import React from "react";
  import Link from "react-router-dom/Link";


  /*

  store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
  });
  
  // The action object dispatched is also the return value of calling dispatch
  const expenseOne = store.dispatch(addExpense( {description: 'Rent payment', amount: 10000, createdAt: 100} ));
  const expenseTwo = store.dispatch(addExpense( {description: 'cup o java', amount: 300, createdAt: 500} ));

  store.dispatch(removeExpense({ id: expenseOne.expense.id }));

  // edit expense takes two parameters, the id to update and the 
  // 'update object' containing new info to be updtated
  store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

  store.dispatch(setTextFilter('rent'));

  store.dispatch(sortByAmount());

  store.dispatch(sortByDate());

  store.dispatch(setStartDate(125)); // dates are like numbers they are timestamps

  store.dispatch(setEndDate());

  // Just listing the thngs we want to keep track of
  const demoState = {
    expenses: [{
      id: 'testId',
      description: 'January rent',
      note: 'Rent is too dang high',
      amount: 54500, // Represented in pennies, keeping whole numbers makes it easier. 
      createdAt: 0 // Time
    }],
    filters: {
      text: 'rent', // search this in note
      sortBy: 'amount', // date or amount
      startDate: undefined, // for filtering by a date range
      endDate: undefined
    }
  };

  // object spread operator defines a new object while grabbing parts from existing objects like array spread operator
  const user = {
    name: 'cob',
    age: 23
  };
  // object spread operator
  console.log({
    // adds the properties from user onto this 'new' object
    ...user, // adds two properties name and age from user into this object. 
    location: 'charlotte', // can add to user
    age: 25 // THIS overrides the 'age' field in user, if it came before user it would get overriden
    // by the value in user. so it lets you pick which value overrides the other, this clones the values
    // in user so the user object doesn't get changed but a new object is created. 
  })

  */


  // Learning HOC = higher order components for Redux. 
  // HOC is a React component that renders another component
  // Used to reuse code, do render hijacking, prop maniupulation, and abstract state
  
  const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  );

  // First HOC 
  const withAdminWarning = (WrappedComponent) => {
    // Return a new component, the HOC
    return (props) => (
      <div>
        { props.isAdmin && <p>This is private info don't share!</p> }
        <WrappedComponent {...props /* this passes every key value pair passed into the HOC down into wrapped component */}/>
      </div>
    );
  };

  const AdminInfo = withAdminWarning(Info);

  const requireAuthentication = (WrappedComponent) => {

    return (props) => (
      <div>
        {props.isAuthenticated ? <p> is autheorized </p> : <p> Not authorized</p> }
        {props.isAuthenticated && <WrappedComponent {...props}/>}
      </div>
    );
  };

  const AuthInfo = requireAuthentication(Info);

 const NotFoundPage = () => (
    <div>
      <p>URL not found bro</p>
      <Link to="/" >LEAVE</Link>
      <AdminInfo isAdmin={false} info='details' />
      <AuthInfo isAuthenticated={true} info='secret massage' />
    </div>
  );

  export default NotFoundPage;