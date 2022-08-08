import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


// Action generaters are tested!! 

test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '5'});
    // toBe will not work here, === does not work for objects with equal values, it checks
    // that they point to the same exact object in memory. So to compare that the property values
    // of an object are the same use toEqual
    expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '5'});
});

test('Checking that edit expense creates the right action object', () => {
    const action = editExpense('4', {new: 'new', value: 'value'});
    expect(action).toEqual({ type: 'EDIT_EXPENSE', id: '4', update: {new: 'new', value: 'value'}});
})

test('Should set up add expense action object', () => {
    const action = addExpense({
        createdAt: 1000,
        description: 'description',
        amount: 20,
        note: 'rent'
    });
    // Have random dynamic addID property, so need to avoid checking the id value
    // expect gives us a function: expect.any to look for type instead of specific values
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
        createdAt: 1000,
        id: expect.any(String),
        description: 'description',
        amount: 20,
        note: 'rent' }
    });
});

test('Should setup add Expense object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({type: 'ADD_EXPENSE', expense: {
        createdAt: 0,
        id: expect.any(String),
        description: '',
        amount: 0,
        note: ''
    }});
});