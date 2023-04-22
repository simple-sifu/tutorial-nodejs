import { call, put, takeLatest } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure } from './ProductSlice';

const PRODUCT_API_CONFIG = process.env.REACT_APP_API_CONFIG

function* getProductsHandler(action) {
    try{
        const products = yield call(() => fetch(`${PRODUCT_API_CONFIG}${action.payload}`));
        const formattedProducts = yield products.json()
        yield put(getProductsSuccess(formattedProducts))
    }catch(err){
        yield put(getProductsFailure(`${err.name}:${err.message}`))
    }
}

export function* productSaga(){
    // special feature with toolkit
    yield takeLatest('products/getProducts', getProductsHandler);

}