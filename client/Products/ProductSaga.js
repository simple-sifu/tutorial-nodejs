import { call, put, takeLatest } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure } from './ProductSlice';
import { HttpGateway } from '../common/HttpGateway'; 

function* getProductsHandler(action) {
    try{
        const PRODUCT_URL = process.env.REACT_APP_PRODUCT_API_CONFIG
        const products = yield call(() => HttpGateway().get(PRODUCT_URL + action.payload));
        yield put(getProductsSuccess(products))
    }catch(err){
        yield put(getProductsFailure(`${err.name}:${err.message}`))
    }
}

export function* productSaga(){
    yield takeLatest('products/getProducts', getProductsHandler);
}