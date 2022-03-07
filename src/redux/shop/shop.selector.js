import { createSelector } from 'reselect'


const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : [] //map the keys of the collections to an array
)

export const selectCollection = collectionUrlParams => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParams] : null)
)

export const selectCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const  selectCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)


