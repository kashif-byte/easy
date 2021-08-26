import React from 'react';
import ReactDOM from 'react-dom';
import theme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>,
  document.getElementById('root')
);

