import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

// Defualt value == the initial value
// value = just the value overall as it changes
// onChange takes in a function and fires it everytime the input changes
// Can dispatch to store because it is connected I believe
// selects are controlled inputs (where we limit the options) while
// text inputs are not becuase users can dynamically enter values.
class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null,
    };

    onDatesChange = ({ startDate, endDate, badValue: bv }) => {
        console.log(bv);
        let buildWord = "" + bv + "street name " + (undefined);
        console.log(buildWord)
        const word = 'word';
        let b = '';
        if (bv) b += bv;
        if (word) b += word + ' ';
        b += word;
        b += ' ' + word;
        console.log(b);
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({
            calendarFocused
        }));
    };

    render() {
        return (
            <div>
                <input value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }} type="text" />
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate());
                    } else if (e.target.value === 'amount') {
                       this.props.dispatch(sortByAmount());
                    } 
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);