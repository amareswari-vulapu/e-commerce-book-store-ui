//** This file creates the sagas for selected item. */
import { all, fork, put, takeEvery, select } from "redux-saga/effects";
import { SelectedItemTypes } from "./types";

import { fetchError, fetchSuccess } from "./action";
import { Inventory } from "../inventory/types";

export const getSelectedItem= (state: { selectedItems: Inventory }) => state.selectedItems;

function* handleSelectedItemsFetch() {
  try {
    const data = yield select(getSelectedItem);
    yield put(fetchSuccess(data));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError("An unknown error occurred."));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(SelectedItemTypes.FETCH_SELECTED_ITEMS_REQUEST, handleSelectedItemsFetch);
}

function* selectedItemSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default selectedItemSaga;
