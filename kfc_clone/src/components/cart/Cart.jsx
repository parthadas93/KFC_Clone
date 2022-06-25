import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCart } from "../../redux/reduxCart/cartAction"



export const Cart = () => {
    // const dispatch= useDispatch()
    // useEffect(() => {
    //     dispatch(getCart())
    // },[])
    const [cart, setCart]= useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/cart').then((res) => {
            setCart(res.data)
        })
    },[])
    
    // const cartItem = useSelector((store) => store.cart.cart)
   
    // console.log('cart kfc', cartItem)
    return <div>
        <h1>cart page</h1>
        <h3>{cart.map((e) => {
            return <>
                <h3>{e.title}</h3>
                <img src={e.img} alt="" />
            </>
        })}</h3>
    </div>
}