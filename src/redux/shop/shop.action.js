import ShopActionTypes from "./shop.types";
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

//redux thunk at work
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections'); 
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshop => {
          const collectionMap = convertCollectionSnapshotToMap(snapshop);
         dispatch(fetchCollectionsSuccess(collectionMap));
         }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}