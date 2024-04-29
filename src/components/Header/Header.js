import React from 'react'
import {  useSelector } from 'react-redux'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import _ from 'lodash'
import { TiThMenu } from "react-icons/ti";
import Search from './Search.js';
import MobileMenu from '../../components/MobileMenu.js';

const Header = () => {

  const navigate = useNavigate()

  const ItemProduct = _.groupBy(useSelector((state) => state.productItems.value), "id")

  let total = 0
  Object.keys(ItemProduct).map((item) => {
    total += ItemProduct[item].reduce((acc, item) => acc + parseFloat(item.price), 0)
  })
  const [isOpen, setIsOpen] = React.useState(false)

  return (

    <>
      <div style={{ backgroundColor: "#2A59FE", display: "flex", justifyContent: "center", padding: "5px", alignItems: "center", paddingInline: "20px", position: "fixed", zIndex: "9999", width: "100vw" }}>
        <div style={{ width: "85%", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
          <div style={{ display: "flex", width: "50%", justifyContent: "space-between" }}>
            <TiThMenu className='hamburger-menu' onClick={() => {
              document.querySelector('.mobile-menu').style.display = (document.querySelector('.mobile-menu').style.display === 'none' || document.querySelector('.mobile-menu').style.display == "") ? 'flex' : 'none'
            }} />
            <span className='logo' style={{ fontWeight: "800", color: "white", fontSize: "22px", cursor: "pointer" }} onClick={() => navigate("/")}>Eteration</span>
            <Search className={'search-bar'} />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className='card-summary' style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", cursor: "pointer" }}>
              <HiOutlineShoppingBag onClick={() => {
                setIsOpen(true)
              }} />
              <span className='modal-total-price' style={{ color: "whitesmoke", fontSize: "15px" }}>{total}.00 ₺</span>
            </div>
            <div style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", cursor: "pointer" }}>
              <CiUser />
              <span style={{ color: "whitesmoke", fontSize: "15px" }}>Melike</span>
            </div>
          </div>
        </div>
        <MobileMenu />
      </div>
    </>
  )
}

export default Header