import { call, put, takeLatest } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure } from './ProductSlice';

function* getProductsHandler() {
    try{
        const products = yield call(() => fetch('http://localhost:8080/api/v1/products/o'));
        const formattedProducts = yield products.json()
        yield put(getProductsSuccess(formattedProducts))
    }catch(err){
        yield put(getProductsFailure(err))
    }
}

function* productSaga(){
    // special feature with toolkit
    yield takeLatest('products/getProducts', getProductsHandler);

}

export default productSaga;