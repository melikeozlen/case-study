import React, { useEffect } from 'react'
import Filter from '../Filter/Filter.js'
import { useDispatch, useSelector } from 'react-redux'
import _, { filter } from 'lodash'
import { setBrands, setModel, setSortBy } from '../../store/slices/filtersSlice.js'
const SideBarLeft = ({
  float,
  className
}) => {
  let data = useSelector((state) => state.productItems.allData) || []

  const FilterItem = useSelector((state) => state.filters)
  const dispatch = useDispatch()



  return (
    <div style={{ width: "90%", display: "flex", flexDirection: "column", alignItems: "end", gap:"25px" }} className={className}>
      <div style={{
        display: "flex",
        flexDirection: "column",
      }}>


        <span>{"Sort By"}</span>
        <div
          className='over-flow-menu-card'
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "1px",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            width: "55%",
            minWidth: "200px"
          }}
        >

          <Filter
            objectName={"sortBy"}
            type="radio"
            dataSource={["OldToNew", "NewToOld", "PriceHighToLow", "PriceLowToHigh"]}
            setter={
              (target) => {
                dispatch(setSortBy(target.value))
              }
            }
          >
          </Filter>

        </div>

      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end"
      }}>

        <span style={{ width: "55%", minWidth: "200px" }}>{"Brands"}</span>
        <div
          className='over-flow-menu-card'
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "1px",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            width: "55%",
            minWidth: "200px"
          }}
        >

          <Filter
            objectName={"brands"}
            type="checkbox"
            fiterItem={FilterItem['brands']}
            dataSource={_.uniqBy(data, 'brand').map((item) => item.brand)}
            hasSearch={true}
            setter={(target) => {
              if (target.checked) {
                dispatch(setBrands([...FilterItem.brands, target.value]))
              } else {
                dispatch(setBrands(FilterItem.brands.filter((item) => item !== target.value)))
              }
            }}
          />

        </div>

      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end"
      }}>

        <span style={{ width: "55%", minWidth: "200px" }}>{"Model"}</span>
        <div
          className='over-flow-menu-card'
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "1px",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            width: "55%",
            minWidth: "200px"
          }}
        >

          <Filter
            objectName={"model"}
            type="checkbox"
            fiterItem={FilterItem['model']}
            dataSource={_.orderBy(_.uniqBy(data, 'model').map((item) => item.model), "desc")}
            hasSearch={true}
            setter={(target) => {
              if (target.checked) {
                dispatch(setModel([...FilterItem.model, target.value]))
              } else {
                dispatch(setModel(FilterItem.model.filter((item) => item !== target.value)))
              }
            }}
          />

        </div>
      </div>

    </div >
  )
}

export default SideBarLeft