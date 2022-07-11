import axios from "axios"
export const CART = 'CART'
export const POST = 'POST'
export const TOTAL = 'TOTAL'
export const DELETE = 'DELETE'
export const QTYINC= "QTYINC"

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

export const qtyIncAction = (price) => {
    return {
        type: QTYINC,
        payload: price
    }
}


export const postCart = (data) => (dispatch) => {
    axios.post("https://kfcclone.herokuapp.com/cart", data).then((res) => {
       dispatch(postCartAction(data))
        // console.log('added to cart',res.data)
   })
console.log('added to cart',data)
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
           return (a +( b.price*b.qty))
        }, 0)
        dispatch(totalAction(sum))
       
    })
}

export const qtyIncreser = (e,value) => (dispatch) => {
    axios.patch(`https://kfcclone.herokuapp.com/cart/${e._id}`, { qty: e.qty + value }).then((res) => {
        dispatch(qtyIncAction(res.data.price))
    })
}


export const deleteItem = (e) =>(dispatch)=> {
    axios.delete(`https://kfcclone.herokuapp.com/cart/${e._id}`).then((res) => {
        dispatch(deleteItemAction(res.data))
        // console.log(res.data)
    }).catch((err) => {
        console.log("err message-",err.message)
    })

    // console.log(e)
    
}
