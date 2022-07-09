import axios from "axios"
export const CART = 'CART'
export const POST = 'POST'
export const TOTAL = 'TOTAL'
export const DELETE='DELETE'

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
export const deleteItemAction = (data) => {
    return {
        type: DELETE,
        payload :data
    }
}


export const postCart = (data) => (dispatch) => {
    axios.post("https://kfcclone.herokuapp.com/cart", data).then((res) => {
       dispatch(postCartAction(data))
        // console.log('added to cart',res.data)
   })
}

export const getCart =()=> (dispatch) => {
    axios.get('https://kfcclone.herokuapp.com/cart').then((res) => {
        dispatch(cartAction(res.data))
        // console.log("after getTotal",store.getState())
  })
}

export const getTotal = () => (dispatch) => {
    axios.get('https://kfcclone.herokuapp.com/cart').then((res) => {
        let sum = res.data.reduce((a, b) => {
           return (a + b.price)
        }, 0)
        dispatch(totalAction(sum))
       
    })
}



export const deleteItem = (e) =>(dispatch)=> {
    axios.delete(`http://localhost:8080/cart/${e.id}`).then((res) => {
        dispatch(deleteItemAction(e))
    })
    
}
