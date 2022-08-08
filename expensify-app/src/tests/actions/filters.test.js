import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";
import moment from 'moment';

// Testing filter action generators

/* Template

test(' ', () => {
    const action = 
    expect(action).toEqual({
        type: '', 
    });
});

*/
test('Should generate set start date action object ', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('Should generate set end date action ', () => {
    const action = setEndDate(moment(5));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(5)
    });
});

test('Should generate setTextFilter action object', () => {
    const action = setTextFilter('something');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        newText: 'something' 
    });
});

test('Should generate setTextFilter action object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        newText: '' 
    });
});

test('Should generate sortByAmount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT', 
    });
});

test('Should generate sortByDate', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE', 
    });
});
