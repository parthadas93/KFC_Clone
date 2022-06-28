import "./nav.css";
import { Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { getCart, getTotal } from "../../redux/reduxCart/cartAction";
export const Navbar = () => {
  const user = useSelector((store) => store.isAuth.isAuth)
  const cartItem = useSelector((store) => store.cart.cart)
  const ttl = useSelector((store) => store.cart.total)
  const newItem = useSelector((store)=>store.cart.newItem)
  
  // console.log('ttl', ttl)
  
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getCart())
 
   dispatch( getTotal())
    // console.log("cartItems", cartItem)



  },[newItem])
  // , cartItem


  return (
    <>
      <div className="nav_main">
        <div className="left_side">
          <Link to="/"> <img className="logo_img" src="/logo.svg" alt="" /></Link>
                 
                
          <b><Link className="link" to="/menu">Menu</Link> </b>
          <b><Link className="link" to="/menu">Deals</Link> </b>
        </div>
        <div className="right_side">
          <span>
            <img src="/login2.png" alt="" />
          </span>
          <b><Link className="link" to="/signup">{!user ? "Signup" : "My Account"}</Link> </b>

         
          <h6 className="cartCountItems">{ "₹"+ ttl.toFixed(2)}</h6>

               <Link to="/cart"><img className="cart_img" src="/cart.svg" alt="" /></Link>   
                 
        </div>
      </div>
    </>
  );
};
