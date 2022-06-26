import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { getCart } from "../../redux/reduxCart/cartAction"
import "./cart.css"



export const Cart = () => {
    // const dispatch= useDispatch()
    // useEffect(() => {
    //     dispatch(getCart())
    // },[])
    const [cart, setCart] = useState([])
    const cartItems = useSelector((store) => store.cart.cart)
    
    console.log('inside cart page', cartItems)

    useEffect(() => {
        axios.get('http://localhost:8080/cart').then((res) => {
          setCart(res.data)
      })
  },[])
    return <div>
        
        <h1>cart page</h1>
        {cart.map((e) => {
            return <>
            <div className="cartItem">
                    <img src={e.img} alt="" />
                    <div>
                    <h6 className="ttl">{e.title}</h6> 
                    <h6>remove</h6>
                    </div>
                    <button className="cartBtn">-</button>
                    <h6>{ e.qty}</h6>
                    <button className="cartBtn">+ </button>
                    <h6>{`₹ ${e.price}` }</h6>
                </div>
                <br />
            </>
            
           
        })}
    </div>
}