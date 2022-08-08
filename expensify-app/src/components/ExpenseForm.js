import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// ex from basic js
//const date = new Date(); // 'terrible and complex'
// ex with moment
//const now = moment(); // this gives the current point in time, now
// comes with a ton of helpful methods
// Format strings work like base strings in printf in c. 
//console.log(now.format('MMM Do, YYYY')); // formats the time, but better with arguments
// moment docs are good apparently 

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        // Keep track of changes as state of this component, then only when they submit
        // do we fire off to the store.
        this.state = {
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense ? (props.expense.amount / 100).toString() : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
    };
    }

    

    onDescriptionChange = (e) => {
        // e.target.value doesn't work in a callback (like shoved into setState) but it
        // does work if isolated into a variable first, or else you'd have to use
        // e.persist() first. 
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        // adding logic so it has to be a number with <= 2 decimal places
        // using regular expressions! 
        // match takes in a regular expression returning true if it matches
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }));
        }
    };

    // For dates we are using Moment.js library for formatting dates and the 
    // react dates library with their single day picker. Also added
    // React dates and react addons shallow compare which is a dependency
    onDateChange = (createdAt) => {
        // onDateChange already passes in the date nicely no e.target.value
        if (createdAt) {
        this.setState(() => ({
            createdAt
        }));
        }
    };

    onFocusChange = ({focused}) => {
        this.setState((state) => ({
            calendarFocused: focused
        }))
    };

    onSubmit = (e) => {
        e.preventDefault(); // stops fullPage refresh from happeneing
        // require value for description and amount 
        if (this.state.description && this.state.amount) {
            // clear the error
            this.setState(() => ({error: ''}));
            // build and submit to parent component the complete expense object
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        } else {
            // set error state for some reason
            //     alert('Please provide desription and amount');
            this.setState(() => ({error: 'Please provide desription and amount'}));
        }
    };

    render() {
        return (
            <div>
                <h2>{this.state.error}</h2>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    /> 
                    <textarea 
                        placeholder='Add a note for your expense (optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}    
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>

            </div>
        )
    }
}



