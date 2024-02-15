import React from "react";
import { useCart } from "react-use-cart";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header/header";

function Cart() {
    const home = useNavigate()
    const back=()=>{
        home('/home')
    }
    const { items,removeItem,updateItemQuantity,cartTotal,isEmpty } = useCart()
    if(isEmpty){
        return (
            <>
            <div className="empty">
            <h3 style={{textAlign:"center"}}>Oops your cart is empty</h3>
            <button className="exit" onClick={back}>SHOP NOW</button>
            </div>
            </>
        )
    }
    return (
        <>
        <Header/>
            <div className="cart">
                {
                    items.map((data) => {
                        return (
                            <>
                                <div className="cart-d">
                                    <div className="cart-dd">
                                        <div className="img">
                                            <img src={data.thumbnail} alt="product-img" />
                                        </div>
                                        <div className="c-detail">
                                            <p>{data.description}</p>
                                            <span className="pisa"><FaRupeeSign />{data.price}.00</span>
                                            <span className="dper">{data.discountPercentage}% off</span>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="plus" onClick={()=>{updateItemQuantity(data.id,data.quantity + 1)}}>+</button>
                                        <span style={{margin:"0 1rem"}}>{data.quantity}</span>
                                        <button className="min" onClick={()=>{updateItemQuantity(data.id,data.quantity -1)}}>-</button>
                                        <button className="rem" onClick={()=>{removeItem(data.id)}}>Remove</button>
                                        <h4 style={{marginTop:"1rem"}}>({data.price} * {data.quantity} = {data.price * data.quantity})</h4>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                                        <h3 style={{textAlign:"center"}}>Total Ammount :- <FaRupeeSign /> {cartTotal}.00</h3>
            </div>
        </>
    )
}
export { Cart }