import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.saga";
import { userSaga, checkUserSessions, onSignOutStart } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSaga),
    call(checkUserSessions),
    call(onSignOutStart),
  ]);
}
