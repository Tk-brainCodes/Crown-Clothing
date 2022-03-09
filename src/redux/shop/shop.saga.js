import {takeEvery} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';

//generator function that does the asynchronous code
export function* fetchCollectionsAsync() {
    yield console.log("i am fired");
}

export function* fetchCollectionsStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}