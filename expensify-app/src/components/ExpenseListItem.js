import React from "react";
import { Link } from 'react-router-dom';

// Renders description, amount, and createdAt value of individual expense
const ExpenseItem = ({description, amount, createdAt, dispatch, id, history}) => (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>{amount} - {createdAt}</p>
      
    </div>
);
// <button onClick={() => history.push(`/edit/${id}`)}>Edit</button>

// This does not give ExpenseItem anything from the state, but now it is connected to the store so it can dispatch. 
export default ExpenseItem; 


