// This files creates the Root reducer and Root saga.
import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import inventorySaga from "./inventory/sagas";
import { InventoryReducer } from "./inventory/reducer";
import { InventoryState } from "./inventory/types";
import cartSaga from "./cart/sagas";
import { cartReducer } from "./cart/reducer";
import { cartState } from "./cart/types";
import { RouterState } from "connected-react-router";
import selectedItemSaga from "./selected-item/sagas";
import { selectedItemsReducer } from "./selected-item/reducer";
import { SelectedItems } from "./selected-item/types";

export interface ApplicationState {
  cart: cartState;
  inventory: InventoryState;
  router: RouterState;
  selectedItems: SelectedItems;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    cart: cartReducer,
    inventory: InventoryReducer,
    router: connectRouter(history),
    selectedItems: selectedItemsReducer
  });

export function* rootSaga() {
  yield all([fork(cartSaga), fork(inventorySaga), fork(selectedItemSaga)]);
}
