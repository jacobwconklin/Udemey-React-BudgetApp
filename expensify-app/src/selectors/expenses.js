import moment from "moment";

// January 1st 1970 is the unix epoch, the start of all dates, all time before it is negative and past it is positive
  // Get visible expenses, destructuring filters!
  const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
      // console.log('inside of get visible expenses\n');
      // console.log(expenses);
    return expenses.filter((expense) => {
      const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt), 'day') :  true;
      // console.log(expense);
      // console.log(expense.description && expense.description.toLowerCase().includes(text.toLowerCase()));
      const textMatch = expense.description && expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
      return 0;
    });
  };

  export default getVisibleExpenses;