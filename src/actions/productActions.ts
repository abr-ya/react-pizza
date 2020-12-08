import { createAction, createCustomAction } from "typesafe-actions";
import productActionTypes from "./productActionTypes";

export const showLoading = createAction(productActionTypes.SHOW_LOADING)();
export const hideLoading = createCustomAction(
  productActionTypes.HIDE_LOADING,
  (data: boolean) => ({ data })
);
export const requestProductsSaga = createAction(
  productActionTypes.REQUEST_PRODUCTS_SAGA
)();
export const setProducts = createCustomAction(
  productActionTypes.SET_PRODUCTS,
  (data: any[]) => ({ data })
);
export const setSort = createCustomAction(
  productActionTypes.SET_SORT,
  (sort: string) => ({ sort })
);
export const setSize = createCustomAction(
  productActionTypes.SET_SIZE,
  (size: string) => ({ size })
);
export const addToCart = createCustomAction(
  productActionTypes.ADD_TO_CART,
  (id: string) => ({ id })
);
export const delFromCart = createCustomAction(
  productActionTypes.DEL_FROM_CART,
  (id: string) => ({ id })
);
export const updateCart = createCustomAction(
  productActionTypes.UPDATE_CART,
  (id: string, quantity: number) => ({ id, quantity })
);
