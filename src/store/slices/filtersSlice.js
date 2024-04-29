import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortBy: "OldToNew",
    brands: [],
    model: [],
    search: ""
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSortBy: (state, item) => {
            state.sortBy = item.payload
        },
        setBrands: (state, item) => {
            state.brands = item.payload
        },
        setModel: (state, item) => {
            state.model = item.payload
        },
        setSearch: (state, item) => {
            state.search = item.payload
        }
    }
})

export const { setSortBy, setBrands, setModel, setSearch } = filterSlice.actions

export default filterSlice.reducer