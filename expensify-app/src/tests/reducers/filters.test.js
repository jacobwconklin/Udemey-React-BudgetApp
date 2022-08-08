import filtersReducer from '../../reducers/filters'
import moment from 'moment';

// Tests

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'}); // Redux uses this to set up reducers or something
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test ('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test ('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', newText: 'word'});
    expect(state.text).toBe('word');
})

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', date: moment(1)});
    expect(state.startDate).toEqual(moment(1));
});

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', date: moment(1)});
    expect(state.endDate).toEqual(moment(1));
});

