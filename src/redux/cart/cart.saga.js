import { all, call, takeLatest, put } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.action";

export function* clearUserCart() {
  yield put(clearCart());
}

export function* onSignoutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearUserCart);
}

export function* cartySagas() {
  yield all([call(onSignoutSuccess)]);
}
