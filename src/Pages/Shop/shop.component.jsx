import {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../Components/collection-overview/collection.overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../Components/with-spinner/with-spinner.components';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching } from '../../redux/shop/shop.selector';
import { selectCollectionLoaded } from '../../redux/shop/shop.selector';
import { fetchCollectionsStart } from '../../redux/shop/shop.action';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const Shop = ({match, isCollectionFetching,   fetchCollectionsStartAction, isCollectionLoaded}) => {
    useEffect(() => {
        fetchCollectionsStartAction();
    },[fetchCollectionsStartAction]);


    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} /> }/>
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
        </div>)
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectCollectionFetching,
    isCollectionLoaded: selectCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAction: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Shop);
