import {ActionType, getType} from 'typesafe-actions';

import * as actions from '../actions/productActions';

export type productState = Readonly<{
	loading: boolean;
	products: any[];
	sort: string;
	size: string;
	cart: any;
}>;

const initialState: productState = {
	loading: false,
	products: [],
	sort: '',
	size: 'all',
	cart: {M2: 1, S3: 2},
};

export type productActions = ActionType<typeof actions>;

export default (
	state = initialState,
	action: productActions,
): productState => {
	switch(action.type) {
		case getType(actions.showLoading):
			return {
				...state,
				loading: true,
			};
		case getType(actions.hideLoading):
			return {
				...state,
				loading: action.data,
			};
		case getType(actions.setProducts):
			return {
				...state,
				products: action.data,
			};
		case getType(actions.setSort):
			return {
				...state,
				sort: action.sort,
			};
		case getType(actions.setSize):
			return {
				...state,
				size: action.size,
			};
		case getType(actions.addToCart):
			return {
				...state,
				cart: {
					...state.cart,
					[action.id]: state.cart[action.id] ? parseInt(state.cart[action.id], 10) + 1 : 1,
				},
			};
		case getType(actions.delFromCart):
			const newCart = state.cart;
			delete newCart[action.id];

			return {
				...state,
				cart: {...newCart},
			};
		default:
			return state;
	}
};
