const redux = require("redux");
const createStore = redux.createStore;

//Define Variable Constant
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
// const ADD_USER = "ADD_USER";

//state
const initialCounterState = {
  count: 0,
};

// const initialUserState = {
//   users: [{ name: "Nur Nahian" }],
// };

//action
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// const addUser = () => {
//     return {
//         type: ADD_USER,
//         payload:{name:''}
//     }
// }

//create reducer (pure function)
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      state;
  }
};

//store getState(),dispatch(),subscribe()

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementCounterByValue(5));

//1 State
//2 Dispatch action
//3 Reducer
//4 Store
