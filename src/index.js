import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import store from './redux/store';

// console.log(store);
// console.log(store.getState());
// console.log(store.dispatch(changeFilter('Andrew')));
// console.log(store.getState());
// console.log(store.dispatch(myAction(25)));
// console.log(store.dispatch(myAction_2));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
