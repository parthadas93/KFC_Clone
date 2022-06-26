export const CART = 'CART'
import axios from "axios"

export const cartAction = (data) => {
    return {
        type: CART,
        payload: data
    }
}

export const postCart = (data) => (dispatch) => {
    axios.post("http://localhost:8080/cart", data).then((res) => {
       dispatch(cartAction(data))
        // console.log(res.data)
   })
}

export const getCart =()=> (dispatch) => {
    axios.get('http://localhost:8080/cart').then((res) => {
      dispatch(cartAction(res.data))
  })
}

