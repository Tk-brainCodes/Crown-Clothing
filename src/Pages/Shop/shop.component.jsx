import {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../Components/collection-overview/collection.overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.action';

const Shop = ({match, updateCollections}) => {
    let unsubscribeFromSnashot = null;
    useEffect(() => {
       const collectionRef = firestore.collection('collections');

      unsubscribeFromSnashot = collectionRef.onSnapshot(async snapshop => {
        const collectionMap = convertCollectionSnapshotToMap(snapshop);
        updateCollections(collectionMap);
       })
    }, [unsubscribeFromSnashot]);

    
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>)
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null,mapDispatchToProps)(Shop);
