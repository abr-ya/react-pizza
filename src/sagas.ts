import {takeLatest, put} from 'redux-saga/effects'; // call // takeEvery, select
//import * as api from './api';
import * as productActions from './actions/productActions';
import {productActionTypes} from './actions/productActionTypes';
import data from './data';
//import {RootState} from 'main';

function* requestProductsSaga(action: ReturnType<typeof productActions.requestProductsSaga>) {
	try {
		yield put(productActions.showLoading());
		//const response = yield call(api.requestProducts); // когда сервер работает
		//console.log('data: ', response.data);
		yield put(productActions.setProducts(data.pizza)); // response.data
		yield put(productActions.hideLoading(false));
	} catch (error) {
		console.error(error);
	}
}

export default function* watchEntities() {
	yield takeLatest(productActionTypes.REQUEST_PRODUCTS_SAGA, requestProductsSaga);
}
