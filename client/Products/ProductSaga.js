import { call, put, takeLatest } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure } from './ProductSlice';
import { HttpGateway } from '../../core/HttpGateway'; 

function* getProductsHandler(action) {
    try{
        const products = yield call(() => HttpGateway().get(action.payload));
        yield put(getProductsSuccess(products))
    }catch(err){
        yield put(getProductsFailure(`${err.name}:${err.message}`))
    }
}

export function* productSaga(){
    // special feature with toolkit
    yield takeLatest('products/getProducts', getProductsHandler);

}