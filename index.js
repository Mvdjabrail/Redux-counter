import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = {
  number: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        number:
          state.number + 1
      }

    case 'decrement':
      return {
        ...state,
        number:
          state.number - 1
      }
    case 'reset':
      return {
        ...state,
        number:
          state.number = 0
      }

    case 'random':
      return {
        ...state,
        number:
          state.number + action.payload
      }


    default:
      return state
  }
}

const store = createStore(reducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
