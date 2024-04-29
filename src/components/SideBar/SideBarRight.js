import React from 'react'
import ShoppingCart from '../ShoppingCart/ShoppingCart.js'
import { useSelector } from 'react-redux'
import _ from 'lodash'
const SideBarRight = () => {
    const ItemProduct = useSelector((state) => state.productItems.value)
    return (
        <div className='sibar-right'>
            <br/>
            <ShoppingCart data={_.groupBy(ItemProduct, "id")} />
        </div>
    )
}

export default SideBarRight