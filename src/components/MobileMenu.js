import React from 'react'
import Search from './Header/Search.js'
import SideBarLeft from './SideBar/SideBarLeft.js'

const MobileMenu = () => {
    return (
        <div className='mobile-menu'>
            <Search className={'search-bar-mobile'} />
            <SideBarLeft float={"left"} className={'side-bar-left-mobile'}/>
        </div>
    )
}

export default MobileMenu