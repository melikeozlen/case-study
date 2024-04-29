import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  allData: undefined
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addItem: (state, item) => {
      state.value = [...state.value, item.payload]
      localStorage.setItem('cart', JSON.stringify(state.value))
    },
    deleteItem: (state, product) => {
      const index = state.value.findIndex((item) => item.id === product.payload)
      if (index !== -1) {
        state.value.splice(index, 1)
      }
      localStorage.setItem('cart', JSON.stringify(state.value))

    },
    setAllData: (state, data) => {
      state.allData = data.payload
    }
  }
})

export const { addItem, deleteItem, setAllData } = productSlice.actions

export default productSlice.reducer