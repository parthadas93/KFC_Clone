import "./nav.css";
import { Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { getCart } from "../../redux/reduxCart/cartAction";
export const Navbar = () => {
  const user = useSelector((store) => store.isAuth.isAuth)
  const cartItem = useSelector((store) => store.cart.cart)
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()
  
  // const cartItemFn = ()=> {
  //   cartItem.map((e) => {
  //     return setTotal(total + e.price)
  //   })
  // }

//   const cartItemTotal = () => {
//     cartItem.reduce(
//       (previousValue, currentValue, index)=>previousValue+currentValue, 
//       0);
//   } 
// console.log('cartTotalPrice', cartItemTotal())

  useEffect(() => {
    dispatch(getCart())

    console.log("cartItems", cartItem)

    // cartItemFn()
    
    console.log('total_price', total)
  },[])
  

  // useEffect(() => {
  //   // count()
    
  //     total.map((e) => {
  //     return setTotalCart(totalCart+e.price)
  //     })
    
  //   console.log("totalCart", totalCart)
  // },[])
  
//   {
//     total.map((e) => {
//   return setCartCount(cartCount + e.price)
// })}

// console.log("cartCount", cartCount)
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

         
          <h6 className="cartCountItems">{}</h6>

               <Link to="/cart"><img className="cart_img" src="/cart.svg" alt="" /></Link>   
                 
        </div>
      </div>
    </>
  );
};
