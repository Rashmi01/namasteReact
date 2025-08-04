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
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li> Online Status : {onlineStauts ? "✅" : "🔴" }</li>
                    <li> <Link to="/" >Home </Link></li>
                    <li> <Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") :setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
  }

  export default Header;