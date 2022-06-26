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
    
    // console.log('inside cart page', cartItems)

    const [ind, setInd]= useState(false)

    useEffect(() => {
        axios.get('http://localhost:8080/cart').then((res) => {
          setCart(res.data)
      })
    }, [ind])
    
    const qtyHandller = (e, value) => {
        axios.patch(`http://localhost:8080/cart/${e.id}`, {qty:e.qty+value}).then((res) => {
        setInd(!ind)
            console.log(e.qty)
    })
        
}



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
                    <button onClick={()=>{qtyHandller(e, -1)}}  className="cartBtn">-</button>
                    <h6>{ e.qty}</h6>
                    <button onClick={()=>{qtyHandller(e, +1)}} className="cartBtn">+ </button>
                    <h6>{`₹ ${(e.price*e.qty).toFixed(2)}` }</h6>
                </div>
                <br />
            </>
            
           
        })}
    </div>
}