import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

function Card() {
    const [data, setdata] = useState([])
    const [search, setsearch] = useState('')
    const [ftoggle, setftoggle] = useState(false)
    const [pfilter, setpfilter] = useState(null)
    const click1 = () => {
        setftoggle(true)
    }
    const click2 = () => {
        setftoggle(false)
    }
    async function getcard() {
        const res = await fetch(`https://dummyjson.com/products`)
        const update = await res.json()
        setdata(update.products)
    }
    useEffect(() => {
        getcard()
    }, [])

    const clear = () => {
        setpfilter(null)
    }
    const price = (maxprice) => {
        return (product) => {
            if (!maxprice || product.price < maxprice) {
                return product.title.toLowerCase().includes(search.toLowerCase())
            }
            return false;
        }
    }
    const filterdata = data.filter(price(pfilter));
    return (
        <>
            <input onChange={(e) => { setsearch(e.target.value) }} className="cin" type="text" placeholder="Products search here" />
            <button onClick={click1} className={`${(ftoggle === true) ? "on1" : "off1"}`}>Filter</button>
            <div className={`${(ftoggle === true) ? "fopen" : "fclose"}`}>
                <button onClick={click2} className={`${(ftoggle === false) ? "on2" : "off2"}`}><ImCancelCircle /></button>
                <button onClick={() => { setpfilter(100) }}>Less than 100</button>
                <button onClick={() => { setpfilter(500) }}>Less than 500</button>
                <button onClick={() => { setpfilter(1000) }}>Less than 1000</button>
                <button onClick={clear}>All</button>
            </div>
            <div className="cards">
                {filterdata.length > 0 ? (

                    filterdata.map((datas) => {
                        return (
                            <>
                                <div key={datas.id} className="card">
                                    <Link to={`/detail/${datas.id}`}><img src={datas.thumbnail} alt="" /></Link>
                                    <h3>{datas.title}</h3>
                                    <h5>{datas.rating}<FaStar /></h5>
                                    <h2><FaRupeeSign />{datas.price}.00</h2>
                                </div>
                            </>
                        )
                    })
                ) : (
                    <>
                        <h2 style={{ textAlign: "center" }}>No items found</h2>
                    </>
                )
                }
            </div>
        </>
    )
}
export { Card }