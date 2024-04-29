import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddToCardButton from './AddToCardButton.js'
import { useSelector } from 'react-redux'
import Pager from '../components/Pager.js'
const ProductList = () => {
  let data = useSelector((state) => state.productItems.allData)
  const [dataSource, setDataSource] = useState([])
  const FilterItem = useSelector((state) => state.filters)
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    if (data) {
      let tempData = [...data]
      if (FilterItem.brands?.length > 0) {
        tempData = tempData.filter((item) => FilterItem.brands.includes(item.brand))
      }
      if (FilterItem.sortBy === "OldToNew") {
        tempData = tempData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      }
      if (FilterItem.sortBy === "NewToOld") {
        tempData = tempData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      }
      if (FilterItem.sortBy === "PriceHighToLow") {
        tempData = tempData.sort((a, b) => b.price - a.price)
      }
      if (FilterItem.sortBy === "PriceLowToHigh") {
        tempData = tempData.sort((a, b) => a.price - b.price)
      }
      if (FilterItem.search?.length > 0) {
        tempData = tempData.filter((item) => item.name.toLowerCase().includes(FilterItem.search.toLowerCase()))
      }
      if (FilterItem.model?.length > 0) {
        tempData = tempData.filter((item) => FilterItem.model.includes(item.model))
      }
      setDataSource(tempData)
    }

  }, [FilterItem, data])



  return (
    <>


      <div className='main-item-page'>
        {
          dataSource.length > 0 ?
            <>
              {dataSource.slice((currentPage - 1) * 12, currentPage * 12).map((item) => (
                <div className='product-card' key={item.id} style={{ width: "auto", cursor: "pointer" }} >
                  <span style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                    onClick={() => navigate(`/productDetail/${item.id}`)}>
                    <img src={item.image} alt={item.name} width={"100%"} loading='lazy' />
                    <span style={{
                      color: "#2A59FE",
                      fontSize: "14px",
                      fontWeight: "500",

                    }}>{item.price} ₺ </span>
                    <p className='prod-item-name' style={{
                      padding: "0",
                      margin: "0",
                      color: "rgba(0, 0, 0, 1)",
                      fontSize: "14px",
                      lineHeight: "17.07px",
                      fontWeight: "500"
                    }} >{item.name}</p>
                  </span>
                  <AddToCardButton item={item} />
                </div>
              ))}
            </>

            : <>
             {data != undefined && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "max-content" }}>
                <h1>No product found</h1>
              </div>}
            </>
        }
      </div>
      <br />
      <Pager currentPage={currentPage} setCurrentPage={setCurrentPage} dataSource={dataSource} />
    </>
  )
}

export default ProductList
