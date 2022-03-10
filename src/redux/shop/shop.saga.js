import {takeEvery, call, put} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure,fetchCollectionsSuccess } from './shop.action';


//generator function that does the asynchronous code
export function* fetchCollectionsAsync() {
    yield console.log("i am fired");
    try {
    const collectionRef = firestore.collection('collections'); //patch "/collections"
    const snapshot = yield collectionRef.get(); //get request to "/collections"
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap)); //dispatch success
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message)); //dispatch error message
    }
}

export function* fetchCollectionsStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}