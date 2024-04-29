import React from 'react'
import {  useParams } from 'react-router-dom';
import AddToCardButton from '../components/AddToCardButton.js';
import { useSelector } from 'react-redux';
const ProductDetailPage = (props) => {
  let data = useSelector((state) => state.productItems.allData) || []
  const params = useParams();
  let detailCard = data.find((item) => item.id === params.id)
  return (
    <div>
      {
        detailCard && (
          <div className='detail-card' >
            <img src={detailCard.image} alt={detailCard.name} width={"30%"} loading='lazy' />
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h5>{detailCard.name}</h5>
              <span style={{ color: "#2A59FE", fontSize: "12px", fontWeight: "600" }}>{detailCard.price} ₺ </span>
              <AddToCardButton item={detailCard} />
              <span style={{
                textAlign: "justify",
              }}>{detailCard.description}</span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ProductDetailPage