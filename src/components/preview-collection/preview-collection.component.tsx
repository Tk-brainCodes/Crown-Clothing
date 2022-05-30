import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

interface PreviewProps {
    title: string
    items: any
}

const PreviewCollection = ({title,items}: PreviewProps) => {
    return (
        <div className="collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
               {
               items
               .filter((item: any, idx: number) => idx < 4)
               .map((item: { id: React.Key | null | undefined; }) => (
                   <CollectionItem key={item.id} item={item}/>
               ))}
            </div>
        </div>
    )
}

export default PreviewCollection;
