import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { Header } from "../Header/header";

function Detail() {
    const { productId } = useParams()
    const [data, setdata] = useState({ images: [] })
    const [img, setimg] = useState(data.images[0])
    useEffect(() => {
        const getdata = async () => {
            const res = await fetch(`https://dummyjson.com/products/${productId}`)
            const update = await res.json()
            setdata(update)
            setimg(update.images[0])
        }
        getdata()
    }, [productId])

    const changeimg = (e) => {
        const imggg = e.target.src
        setimg(imggg)
    }
    const {addItem,inCart} = useCart()
    return (
        <>
        <Header/>
            <div className="detail">
                <div className="image">
                    <div className="img">
                        {
                            data.images.map((item, index) => (
                                <button key={index} onClick={changeimg}><img src={item} alt="" /></button>
                            ))
                        }
                    </div>
                    <div className={`${setimg} main-img`}>
                        <img src={img} alt="" />
                        <br />
                        {inCart(data.id) ?  <Link to='/cart'><button>Added</button></Link> : <button onClick={()=>{addItem(data)}}>ADD TO CART</button>}
                    <button>BUY NOW</button>
                    </div>          
                </div>
                <div className="det">
                    <p>{data.description}</p>
                    <h4>{data.rating}<FaStar /></h4>
                    <span className="pisa"><FaRupeeSign />{data.price}.00</span>
                    <span className="dper">{data.discountPercentage}% off</span>
                </div>
            </div>
        </>
    )
}
export { Detail }