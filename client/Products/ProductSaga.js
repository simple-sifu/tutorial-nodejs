import { call, put, takeLatest } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure } from './ProductSlice';

function* getProductsHandler(action) {
    try{
        const products = yield call(() => fetch(`http://localhost:8080/api/v1/products/${action.payload}`));
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