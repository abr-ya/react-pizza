import {combineReducers} from 'redux';
import productReducer from './productReducer';

const createRootReducer = () =>
	combineReducers({
		product: productReducer,
	});

export default createRootReducer;
