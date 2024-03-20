import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
=======
>>>>>>> 28211f6 (Refactor: 현재까지 코드 TS로 리팩토링)
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <App /> 
    </Provider>
=======
    <App />
>>>>>>> 28211f6 (Refactor: 현재까지 코드 TS로 리팩토링)
  </React.StrictMode>
);