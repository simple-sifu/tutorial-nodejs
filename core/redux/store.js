import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../../client/Products/ProductSlice';
import productSaga from '../../client/Products/ProductSaga';

const saga = createSagaMiddleware();
const store = configureStore(
  {
    reducer: {
        products: productsReducer,
    },
    middleware: [saga],
  },
);
saga.run(productSaga)

export default store;