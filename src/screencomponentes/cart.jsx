import React from "react";
import { useCart } from "react-use-cart";
import { FaRupeeSign } from "react-icons/fa";

function Cart() {
    const { items,removeItem,updateItemQuantity } = useCart()
    return (
        <>
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
                                            <span><FaRupeeSign />{data.price}.00</span>
                                            <span>{data.discountPercentage}% off</span>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button onClick={()=>{updateItemQuantity(data.id,data.quantity + 1)}}>+</button>
                                        <span>{data.quantity}</span>
                                        <button onClick={()=>{updateItemQuantity(data.id,data.quantity -1)}}>-</button>
                                        <button onClick={()=>{removeItem(data.id)}}>Remove</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export { Cart }