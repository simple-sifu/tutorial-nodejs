import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Products/ProductSlice';
import { productSaga } from '../Products/ProductSaga';

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