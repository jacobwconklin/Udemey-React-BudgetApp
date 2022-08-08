// import without the ./ for 3rd party software added
// this is an npm module!
import React from 'react';
// Readig documentation for 3rd party resources can be important for knowing what you need to import.
// Grab default export before curly brackets, and it can be renamed to anything because its the default
// import subtractMethod, {square, add} from './utils.js'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

const store = configureStore();

store.dispatch(addExpense( { description: 'Water bill', amount: 450, createdAt: 2000}));
store.dispatch(addExpense( { description: 'Gas bill', amount: 533, createdAt: 50}));
store.dispatch(addExpense( { description: 'Rent', amount: 1500, createdAt: 1}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

/* store.dispatch(setTextFilter('water'));
setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000); */

// Provider lets individual components easily access the store

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter></AppRouter>
    </Provider>
    
  );
}


//  Put this into app to run the entire Indecision application <IndecisionApp options={['Hell\'s kitchen', 'Gotham']}/>
ReactDOM.render(<App />, document.getElementById('root'));






/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/styles.scss';
import 'normalize.css/normalize.css';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
