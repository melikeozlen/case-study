import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice.js'
import filtersSlice from './slices/filtersSlice.js'

export const store = configureStore({
  reducer: {
    productItems: productSlice,
    filters: filtersSlice
  },
})