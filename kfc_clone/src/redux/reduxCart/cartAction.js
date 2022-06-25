export const CART = 'CART'
import axios from "axios"

export const cartAction = (data) => {
    return {
        type: CART,
        payload: data
    }
}

export const getCart = (data) => (dispatch) => {
    axios.post("http://localhost:8080/cart", data).then((res) => {
       dispatch(cartAction(res.data))
   })
}