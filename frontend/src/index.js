import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ThemeContextProvider from './context/theme-context';

ReactDOM.render(
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
