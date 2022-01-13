import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopItems } from '../../redux/shop/shop.selector';
import PreviewCollection from '../../Components/preview-collection/preview-collection.component';

const Shop = ({collections}) => {

    return (
        <div className="shop-page">
            {collections.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection  key={id} {...otherCollectionProps}/>
            ))}
        </div>)
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
})

export default connect(mapStateToProps)(Shop);
