import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/appContainer';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {batchDispatchMiddleware, enableBatching} from 'redux-batched-actions';
import {composeWithDevTools} from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import {StateType} from 'typesafe-actions';
import createRootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = createRootReducer();
export type RootState = StateType<typeof rootReducer>;

export const store = createStore(
	enableBatching(rootReducer),
	composeWithDevTools(
		applyMiddleware(
			sagaMiddleware,
			batchDispatchMiddleware,
		),
	),
);

sagaMiddleware.run(rootSaga);

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
