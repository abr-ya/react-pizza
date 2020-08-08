import {all, fork} from 'redux-saga/effects';

import allSaga from './sagas';

export default function* rootSaga() {
	yield all([
		fork(allSaga),
	]);
}
