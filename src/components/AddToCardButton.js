import React from 'react'
import { Button } from 'reactstrap'
import { addItem } from '../store/slices/productSlice.js'
import { useDispatch } from 'react-redux'

const AddToCardButton = ({item}) => {
    const dispatch = useDispatch()
    return (
        <Button className='add-to-cart-button' style={{
            fontWeight:"400",
            fontSize:"1em",
            lineHeight:"19.5px"
        }} color='primary' onClick={() => dispatch(addItem(item))}>Add To Card</Button>
    )
}

export default AddToCardButton