import axios from "axios"
export const CART = 'CART'
export const POST = 'POST'
export const TOTAL = 'TOTAL'

export const totalAction = (data) => {
    return {
        type: TOTAL,
        payload: data
    }
}

export const postCartAction = (data) => {
    return {
        type: POST,
        payload: data
    }
}

export const cartAction = (data) => {
    return {
        type: CART,
        payload: data
    }
}

export const postCart = (data) => (dispatch) => {
    axios.post("http://localhost:8080/cart", data).then((res) => {
    //    dispatch(cartAction(data))
        console.log('added to cart',res.data)
   })
}

export const getCart =()=> (dispatch) => {
    axios.get('http://localhost:8080/cart').then((res) => {
        dispatch(cartAction(res.data))
        // console.log("after getTotal",store.getState())
  })
}

export const getTotal = () => (dispatch) => {
    axios.get('http://localhost:8080/cart').then((res) => {
        let sum = res.data.reduce((a, b) => {
           return Math.ceil(a + b.price)
        }, 0)
        dispatch(totalAction(sum))
       
    })
}

