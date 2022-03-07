import {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../Components/collection-overview/collection.overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../Components/with-spinner/with-spinner.components';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import { selectCollectionFetching } from '../../redux/shop/shop.selector';
import { selectCollectionLoaded } from '../../redux/shop/shop.selector';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const Shop = ({match, isCollectionFetching,  fetchCollectionsStartAsync, isCollectionLoaded}) => {
    useEffect(() => {
      fetchCollectionsStartAsync();
    },[fetchCollectionsStartAsync]);


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
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(Shop);
