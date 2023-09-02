import React from 'react';
import { ThemeProvider } from 'styled-components';

import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { theme } from 'components/helpers/Theming';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
