import { CART } from "./cartAction"
import { TOTAL } from "./cartAction"
import { POST } from "./cartAction"

const cart = {
    cart: [],
    total: 0
}
export const cartReducer = (store= cart, {type, payload}) => {
    switch(type){
        case CART:
            return { ...store, cart: payload }
        case TOTAL:
           
            return { ...store, total:payload}
        default:
        return store
    }
}

