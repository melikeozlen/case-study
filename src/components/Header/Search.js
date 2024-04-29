import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { setSearch } from '../../store/slices/filtersSlice.js'
import { useDispatch } from 'react-redux'

const Search = ({className}) => {
    const dispatch = useDispatch()
    return (
        <div className={className} style={{ backgroundColor: "white", padding: "5px", display: "flex", justifyContent: "start", alignItems: "center", gap: "10px", width: "60%" }}>
            <CiSearch />
            <input className='search-input' style={{ outline: "none", border: "none" }} type="text" placeholder="Search..." onChange={(e) => dispatch(setSearch(e.target.value))} />
        </div>
    )
}

export default Search