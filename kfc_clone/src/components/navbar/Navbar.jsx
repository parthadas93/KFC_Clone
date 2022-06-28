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
  
  console.log('ttl', ttl)
  
  const dispatch = useDispatch()

    //  let sum = cartItem.reduce((a,b)=>{
    //   let x = (Math.ceil(a + b.price))
      
    //   return x
    //  }, 0)
     
    //  const [total, setTotal] = useState(sum)
//  console.log("sum new",sum)
  // {
  //   cartItem.reduce((a, b) => {
  //   return setTotal(Math.ceil(a+b.price))
  // },0)}
  

  useEffect(() => {
    dispatch(getCart())
 
   dispatch( getTotal())
    console.log("cartItems", cartItem)



  },[newItem])
  


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

         
          <h6 className="cartCountItems">{ "₹"+ ttl}</h6>

               <Link to="/cart"><img className="cart_img" src="/cart.svg" alt="" /></Link>   
                 
        </div>
      </div>
    </>
  );
};
