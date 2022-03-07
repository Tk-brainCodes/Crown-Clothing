import {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../Components/collection-overview/collection.overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.action';
import WithSpinner from '../../Components/with-spinner/with-spinner.components';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


const Shop = ({match, updateCollections}) => {
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
       const collectionRef = firestore.collection('collections'); 

      collectionRef.get().then(snapshop => {
        const collectionMap = convertCollectionSnapshotToMap(snapshop);
        updateCollections(collectionMap);
        setIsLoading(false)
       })
    });


    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} /> }/>
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>}/>
        </div>)
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null,mapDispatchToProps)(Shop);
