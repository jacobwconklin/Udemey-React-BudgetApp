import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1> Our list of Expenses! </h1>
        { props.expenses.map((expense) => {
            return    <ExpenseItem key={expense.id} {...expense} />
        }) }

    </div>
);

// re-runs whenever store changes, this is reactive this is good. 
const mapStateToProps = (state) => { // maps state of the store to props variable FOR ExpenseList
    console.log('called connected');
    console.log(state);
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// Connect gives us back a function to call for a HOC,
// so by putting ExpenseList in parenthesis after connect() its calling the returned function
// with the parameter ExpenseList


// idk why changing to connectedexpenselist breaks everything, maybe it's my version of react-redux idk... 
try {
    connect(mapStateToProps)(ExpenseList);
    console.log('didnt fail');
} catch (e) {
    console.log('failed');
}
// Connect has two parts: first parenthesis is what you want off the store
// second parenthesis is the component you are connecting to the store
export default connect(mapStateToProps)(ExpenseList);