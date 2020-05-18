//** This file creates the sagas for inventory. */
import { all, fork, put, takeEvery } from "redux-saga/effects";
import { InventoryActionTypes } from "./types";

import { fetchError, fetchSuccess } from "./action";

export const getUsers= () => {
  return fetch("http://localhost:3001/books", {
      method: 'GET'
  });
}

async function fetchAsync(func:any) {
  const response = await func();
  if (response.ok) {
      return await response.json();
  }
  throw new Error("Unexpected error!!!");
}

function* handleFetch() {
  try {
    const books = yield fetchAsync(getUsers);
    yield put(fetchSuccess(books));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError("An unknown error occurred."));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(InventoryActionTypes.FETCH_REQUEST, handleFetch);
}

function* inventorySaga() {
  yield all([fork(watchFetchRequest)]);
}

export default inventorySaga;
