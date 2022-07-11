import { CART, DELETE, QTYINC } from "./cartAction"
import { TOTAL } from "./cartAction"
import { POST } from "./cartAction"

const cart = {
    cart: [],
    total: 0,
    newItem: [],
    deletedItem: [],
    qtyIncrese:0
}
export const cartReducer = (store= cart, {type, payload}) => {
    switch(type){
        case CART:
            return { ...store, cart: payload }
        case TOTAL:
           
            return { ...store, total: payload }
        case POST:
            return { ...store, newItem: payload }
        case DELETE:
            return { ...store, deletedItem: payload }
        case QTYINC:
            return {...store, qtyIncrese:store.total+payload}
        default:
        return store
    }
}

