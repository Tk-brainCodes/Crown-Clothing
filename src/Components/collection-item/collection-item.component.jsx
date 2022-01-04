import React from 'react';
import CustomButton from '../custom-buttons/custom-buttons.component';
import './collection-item.styles.scss';

const CollectionItem = ({id, price, name, imageUrl}) => {
    return (
        <div className='collection-item'>
            <div 
            className='image'
            style={{
             backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton inverted>Add to cart</CustomButton>
        </div>
    ) 
}

export default CollectionItem;
