import React from 'react'
import SideBarLeft from '../components/SideBar/SideBarLeft.js'
import ProductList from '../components/ProductList.js'

const ProductListPage = (props) => {
   
    return (
        <div className='main-page'>
            <SideBarLeft float={"right"} className={'side-bar-left'} />
            <div className='product-list'>
                <ProductList  />
            </div>
        </div>
    )
}

export default ProductListPage


