import { CART, DELETE } from "./cartAction"
import { TOTAL } from "./cartAction"
import { POST } from "./cartAction"

const cart = {
    cart: [],
    total: 0,
    newItem: [],
    deletedItem: []
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
            return {...store, deletedItem:payload}
        default:
        return store
    }
}

