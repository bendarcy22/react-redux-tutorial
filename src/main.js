// import { createStore, combineReducers } from 'redux';
// import React, { PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
//
// const store = createStore(counter);
//
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

const addCounter = (list) => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
}

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
}

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];
  deepFreeze(listBefore);
  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  deepFreeze(listBefore);
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
}

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];
  deepFreeze(listBefore);
  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed.')

// const Counter = ({
//   value,
//   onIncrement,
//   onDecrement
// }) => (
//   <div>
//     <h1>{value}</h1>
//     <button onClick={onIncrement}>+</button>
//     <button onClick={onDecrement}>-</button>
//   </div>
// )
//
// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() =>
//         store.dispatch({
//           type: 'INCREMENT'
//         })
//       }
//       onDecrement={() =>
//         store.dispatch({
//           type: 'DECREMENT'
//         })
//       }
//       />,
//     document.getElementById('app')
//   );
// }
//
// store.subscribe(render);
// render();
