 import { LOGO_URL } from "../utils/constant";
 import { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import useOnlineStatus from "../utils/useOnlineStatus";

 const Header = () =>{
    const [btnName, setBtnName ]= useState("Login");
    const onlineStauts = useOnlineStatus();

    useEffect(()=>{
        console.log("useEffect");
    },[btnName])
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-3">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"> Online Status : {onlineStauts ? "✅" : "🔴" }</li>
                    <li className="px-4"> <Link to="/" >Home </Link></li>
                    <li className="px-4"> <Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart</Link></li>
                    <button className="login" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") :setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
  }

  export default Header;