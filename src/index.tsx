import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './styles/main.scss';
import { Routes } from './routes';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import store from './store/configure-store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
