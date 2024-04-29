import React from 'react'
import { addItem, deleteItem } from '../../store/slices/productSlice.js'
import {  useDispatch } from 'react-redux'
import { Button } from 'reactstrap'


const ShoppingCart = ({ data }) => {

    const dispatch = useDispatch()

    let total = 0
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "10px",
                backgroundColor: "white",
                borderRadius: "1px",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                float: "left",
                marginLeft: "50px",
                width: "80%",
                minWidth: "200px"
            }}>
                {Object.keys(data).length > 0 ? Object.keys(data).map((item, index) => {
                    total += data[item].reduce((acc, item) => acc + parseFloat(item.price), 0)

                    return (
                        <div key={index}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <p style={{ marginLeft: "10px", fontSize: "12px", margin: "auto" }}>{data[item][0].name}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>

                                    <Button color='secondary'
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "30px",
                                            height: "30px"
                                        }}
                                        onClick={() => {
                                            dispatch(deleteItem(data[item][0].id))
                                        }}>-</Button>
                                    <span style={{ marginInline: "10px" , width:"20px", height:"auto", textAlign:"center"}}>
                                        {/* {data[item].reduce((acc, item) => acc + parseFloat(item.price), 0)} ₺
                                         */}
                                        {data[item].length}
                                    </span>
                                    <Button
                                        color='secondary'
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "30px",
                                            height: "30px"
                                        }}
                                        onClick={() => {
                                            dispatch(addItem(data[item][0]))
                                        }}
                                    >+</Button>

                                </div>
                            </div>
                        </div>
                    )
                }) :
                    <div>
                        <h6>There are no items in your cart.</h6>
                    </div>
                }
            </div>
            <br />

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "10px",
                backgroundColor: "white",
                borderRadius: "1px",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                float: "left",
                marginLeft: "50px",
                marginTop: "60px",
                width: "80%",
                minWidth: "200px"
            }}>
                <span>Check Out</span>
             
                <span>
                    Total Price: <span 
                    className='total-price' style={{
                        color: "#007bff",
                        fontWeight: "600",
                        display: "inline",
                        width: "max-content",
                    }} >{total}.00 ₺</span>
                </span>

                <Button color='primary'>Check Out</Button>
            </div>
        </>
    )
}

export default ShoppingCart