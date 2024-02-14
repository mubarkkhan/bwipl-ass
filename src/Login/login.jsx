import React, { useEffect, useState } from "react";
import logo from "../Image/retina-logo.png"
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login(){
    const [data,setdata] = useState([])
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
    const home = useNavigate()
    async function getuser(){
        const res = await fetch(`https://dummyjson.com/users`)
        const update = await res.json()
        setdata(update.users)
    }
    useEffect(()=>{
        getuser()
    }, [])

    const click=()=>{
        if(!email || !password){
            alert('please fill the input')
        }
        else{
            const check = data.find(item=> item.username === email && item.password === password)
            if(check){
                setTimeout(() => {
                    home('/home')
                }, 2000);
                toast.success('user login successfully')
            }
            else{
                toast.error('user not found')
            }
        }
    }
  return(
    <>
    <ToastContainer/>
    <div className="login">
        <img src={logo} alt="logo" />
        <input onChange={(e)=>{setemail(e.target.value)}} type="Email" placeholder="Enter your username"/>
        <br />
        <input onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Enter your password"/>
        <br />
        <button onClick={click}>Login</button>
        <h4>Create a new account</h4>
    </div>
    </>
  )
}
export{Login}