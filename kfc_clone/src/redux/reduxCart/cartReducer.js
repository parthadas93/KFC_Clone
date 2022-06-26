import { CART } from "./cartAction"
import { TOTAL } from "./totalAction"

const cart = {
    cart: [],
    total:0
}
export const cartReducer = (store= cart, {type, payload}) => {
    switch(type){
        case CART:
            return { ...store, cart: payload }
        case TOTAL:
            let totalAm = store.cart.reduce((acc, curr) => {
               return acc+curr
            },0)
            return { ...store, total:totalAm}
        default:
        return store
    }
}

