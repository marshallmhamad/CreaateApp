import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';
import './index.css';
import { UserAuthContextProvider } from './Components/Authentication';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  /*  <React.StrictMode> */
  <UserAuthContextProvider>

    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}

  </UserAuthContextProvider>
  /* </React.StrictMode> */
);