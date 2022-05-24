import { takeLatest, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  convertCollectionSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.action";

//generator function that does the asynchronous code
export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections"); //patch "/collections"
    const snapshot = yield collectionRef.get(); //get request to "/collections" in firebase
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap)); //dispatch success
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message)); //dispatch error message
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
