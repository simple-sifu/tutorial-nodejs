import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';

const saga = createSagaMiddleware();
const store = configureStore(
  {
    reducer: {},
    middleware: [saga],
  },
);
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>,

);
