import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteItem, getCart } from "../../redux/reduxCart/cartAction"
import "./cart.css"
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Button } from "../main_button/Button"



export const Cart = () => {
const dispatch = useDispatch()
    const [cart, setCart] = useState([])
    const cartItem = useSelector((store) => store.cart.deletedItem)
    const cartItems = useSelector((store) => store.cart.cart)
    const ttl = useSelector((store) => store.cart.total)
    
    // console.log('inside cart page', cartItems)

    const [ind, setInd] = useState(false)
    const [delt, setDelt]= useState(cartItems.length)

    useEffect(() => {
        // axios.get('http://localhost:8080/cart').then((res) => {
        //   setCart(res.data)

    //   })
        
        dispatch(getCart())
    }, [ind,cartItem])
    // 
    const qtyHandller = (e, value) => {
        axios.patch(`http://localhost:8080/cart/${e.id}`, {qty:e.qty+value}).then((res) => {
        setInd(!ind)
            console.log(e.qty)
    })
        
}



    return <div className="cartMain">
 
    <div className="cartItem_main">
        
        <h1>cart page</h1>
        {cartItems.map((e) => {
            return <>
            <div className="cartItem">
                    <img src={e.img} alt="" />
                    <div>
                    <h6 className="ttl">{e.title}</h6> 
                        <h6 onClick={() => {
                            dispatch(deleteItem(e))
                    }}>remove</h6>
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
        <div className="checkOut">
            <img src="./coupon2.jpg" alt="" />
        <InputGroup size="sm" className="mb-3" />
       
            <Form.Control
                placeholder="Enter code MASAI30"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
            />
            <br />
            <Button>SUBMIT</Button>
            <br />

            <div className="checkOutInfo">
                <span className="checkout_left">SubTotal-</span>
                <span className="checkout_right">{"₹"+ttl.toFixed(2)}</span>
                <br />
                <span className="checkout_left"> Delivary Charge-</span>
                <span className="checkout_right">{"₹"+"70.00"}</span>
                <br />
                <span className="checkout_left">Grand Total- </span>
                <span className="checkout_right">₹{(ttl + 70).toFixed(2)}</span>
               
            </div>
            <br />
            <Button>CheckOut</Button>
        
            </div>





    </div>
    
    
    
}