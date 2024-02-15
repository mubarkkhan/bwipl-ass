import React from "react";
import logo from "../Image/retina-logo.png"
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

function Header() {
    const nav = [
        {
            id: 1,
            name: 'Home',
            path: '/home'
        },
        {
            id: 2,
            name: 'about us',
            path: '/about'
        },
        {
            id: 3,
            name: 'portfolio',
            path: '/portfolio'
        },
        {
            id: 4,
            name: 'contact us',
            path: '/contact'
        }
    ]
    const {totalUniqueItems} =useCart()
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav">
                    <div className="list">
                        {
                            nav.map((list , index) => {
                                return (
                                    <>
                                        <NavLink key={index} activeClassName='active' to={list.path}><li>{list.name}</li></NavLink>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="but">                       
                        <button>Let's Talk</button>
                       <Link to='/cart'> <span><FaShoppingCart /></span></Link>
                        <h6>{totalUniqueItems}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Header }