import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";

const EditExpensePage = (props) =>{

   

    const street_line = '811 pyrtle';


    const payload = {
      options: {},
      street_line
    }

    

    console.log(payload);

    return (
        <div>
          <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
              console.log('updated', expense); // comma in console.log lets you print an object, not toString any object. 
              props.dispatch(editExpense(props.match.params.id, expense));
              props.history.push('/');
            }}
          />
          {/* NEED to pass value into action generator (here Remove Expense) as an OBJECT! */}
          <button onClick={() => {
            props.dispatch(removeExpense({id: props.match.params.id})); 
            props.history.push('/')  
          }}>Remove</button>
        </div>
      );
} 

// Can also look at the props passed into the HOC 
const mapStateToProps = (state, props) => {
  return {
    // Find searches through an array finding one matching item
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  };
}

export default connect(mapStateToProps)(EditExpensePage);