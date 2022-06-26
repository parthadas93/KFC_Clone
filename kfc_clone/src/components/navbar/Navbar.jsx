import "./nav.css";
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export const Navbar = () => {
  const user = useSelector((store) => store.isAuth.isAuth)
  // const [cartCount, setCartCount]= useState([])
  const total = useSelector((store) => store.cart.cart)
  // console.log('new total', total)
  const [itemCount, setItemCount] = useState(0)
  const count = () => {
    axios.get("http://localhost:8080/cart").then((res) => {
      setItemCount(res.data.length)
      // setTotal(res.data)
    })
  }

//   const getTotal = () => {
//     axios.get("http://localhost:8080/cart").then((res) => {
//       setCartCount(res.data)
//     })
// }

  // useEffect(() => {
  //   getTotal()
  //   {
  //     cartCount.map((e) => {
  //     setItemCount(itemCount+e.price)
  //   })}
  // },[])

  useEffect(() => {
    count()
  },[total])
  
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
          
          <h6>{itemCount}</h6>
          

               <Link to="/cart"><img className="cart_img" src="/cart.svg" alt="" /></Link>   
                 
        </div>
      </div>
    </>
  );
};
