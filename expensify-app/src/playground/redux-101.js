console.log('101');

//playing with redux

  // Action generator takes care of generating the actions to send to the store.
  // Now this function can be called to get an action. 
  // Helps avoid typos and utilizes autocompletion
  // use payload to take in an object, default it to an empty object
  // can also destructure arugments passed into functions. 
  // Check if payload's incrementBy exists if not default to 1
  const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
  });

  const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
  });

  // No default value, count MUST be provided
  const setCount = ({count}) => ({
    type: 'SET',
    count
  });

  const reset = () => ({
    type: 'RESET'
  });

  // Reducer
  // 1. Reducers are pure functions, outputs are only determined by the inputs just state and action
  // 2. don't use or CHANGE things outside of the function. -> Never change state or action, just return
  // an object instead of changing them directly. 
  // first parameter is the current state of the store, like setState
  // Here first parameter is given default value (if none is provided) of 0
  const countReducer =(state = {count: 0}, action) => { // Actions get passed into state as second parameter
    console.log('running (store is being accessed)');
    // First look at action type
    switch (action.type) {
      case 'INCREMENT':
        // Moved this check to incrementCount method
        // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
          count: state.count + action.incrementBy
        }; // Return a new object, don't change state just like in setState() 
      case 'DECREMENT':
        return {
          count: state.count - action.decrementBy
        };
      case 'SET':
        return {
          count: action.count
        }
      case 'RESET':
        return {
          count: 0
        }
      default:
        return state; // making 0 changes to application state but setting up the default.
    }
  };

  
  const store = createStore(countReducer);

  // This funciton gets called whenever the store changes!!!
  const unsubscribe = store.subscribe(() => {
    console.log(store.getState().count); // prints each time store changes. 
  });
  // The return value from subscribe is actually a function to unsubscribe
  // It can be called whenever you are finished listening to the store


  // returnst the current state object
  console.log(store.getState());

  // Action = an object that gets sent to the store
  // Actions MUST have a type property, redux demands it, but they can have as many
  // extra properties you want

  // to increment the count
  store.dispatch( // This sends an action object to the store
  {
    type: 'INCREMENT',
    incrementBy: 5
  });

  store.dispatch(incrementCount({ incrementBy: 5 }));

  store.dispatch({
    type: 'DECREMENT',
    decrementBy: 4
  });

  store.dispatch(decrementCount({ decrementBy: 10}));

  store.dispatch({
    type: 'RESET'
  });

  store.dispatch(reset());
  
  store.dispatch(setCount({ count: 50 }));


  unsubscribe();

/* 
Writing permaleases here then copying and pasting into widget.myfinance

Correct finished example:

  permalease: {
    spectrum: '18778377002',
    att: '18778168663',
    cox: '18774589445',
    comcast: '18772839843',
    frontier: '18772916146',
    verizon: '18777043238',
    centurylink: '18334439954',
    hughesnet: '18885185807',
    generic: '18775720987',
  },

  ----------------------------------------
  1) Chameleon | Allconnect | Zip Detected Providers

  permalease: {
    spectrum: '8778920296',
    att: '8669733312',
    cox: '8776095661',
    comcast: '8776500194',
    frontier: '8444467188',
    verizon: '8442668910',
    centurylink: '8779805914',
    hughesnet: '8772661233',
    generic: '8338246728',
  },

  2) Chameleon | The Connected Home | Zip Detected Providers

  permalease: {
    spectrum: '8777831431',
    att: '8333060991',
    cox: '8777326707',
    frontier: '8773394998',
    verizon: '8337133251',
    centurylink: '8773446356',
    hughesnet: '8444076210',
    generic: '8443166712',
  },

  3) Chameleon | DLC | Full Page

  permalease: {
    spectrum: '8772882957',
    att: '8338377935',
    cox: '8774965259',
    comcast: '8443653837',
    frontier: '8444492678',
    verizon: '8668446979',
    centurylink: '8778854990',
    hughesnet: '8665698709',
    generic: '8337363828',
  },

  4) Chameleon | MS Power | Full Page
  
  Already Done

  5) Chameleon Xcel Full Page

  Already Done

  6) Chameleon Gas South Full Page
Also has MCC bit but has to be the one

  permalease: {
    spectrum: '8773341490',
    att: '8778309787',
    cox: '8778921116',
    comcast: '8779087855',
    frontier: '8558724405',
    verizon: '8778272517',
    centurylink: '8552023490',
    hughesnet: '8884619757',
    generic: '8442749075',
  },

  7) Chameleon AEP Full Page

  permalease: {
    spectrum: '8552307235',
    att: '8778178034',
    cox: '8555410815',
    comcast: '8552639601',
    frontier: '8776487650',
    verizon: '8552155762',
    centurylink: '8779081538',
    hughesnet: '8443240139',
    generic: '8553703514',
  },

  8) Chameleon Cord Cutter News Zip Detected Providers
  Theres 2!! I assume add to both!

  permalease: {
    spectrum: '8448477923',
    att: '8772962209',
    cox: '8779246078',
    comcast: '8556289777',
    frontier: '8775838836',
    verizon: '8339040675',
    centurylink: '8553904305',
    hughesnet: '8337346373',
    generic: '8772581952',
  },

  9) Chameleon ZDNet Zip Detected Proivders
  Again there is two instances

  permalease: {
    spectrum: '8447016784',
    att: '8556122990',
    cox: '8338099110',
    comcast: '8773136911',
    frontier: '8777363250',
    verizon: '8773902783',
    centurylink: '8775572499',
    hughesnet: '8553809323',
    generic: '8335101627',
  },

  10) Chameleon Alabama Power MCC Full Page

  permalease: {
    spectrum: '8779803353',
    att: '8883445953',
    cox: '8773132999',
    comcast: '8775447584',
    frontier: '8776874137',
    verizon: '8777174107',
    centurylink: '8779083962',
    hughesnet: '8779806750',
    generic: '8778453761',
  },

  11) Chameleon Georgia Power MCC Full Page

  permalease: {
    spectrum: '8776860298',
    att: '8338756841',
    cox: '8335254287',
    comcast: '8778871702',
    frontier: '8884986314',
    verizon: '8338257863',
    centurylink: '8336071496',
    hughesnet: '8773883084',
    generic: '8336134014',
  },


  RELOCATOR and BELOW ARE DONE


  Empty)

  permalease: {
    spectrum: '',
    att: '',
    cox: '',
    comcast: '',
    frontier: '',
    verizon: '',
    centurylink: '',
    hughesnet: '',
    generic: '',
  },
*/