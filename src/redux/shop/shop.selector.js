import { createSelector } from 'reselect'


const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key]) //map the keys of the collections to an array
)

export const selectCollection = collectionUrlParams => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParams]
)
