import { CART } from "./cartAction"

const cart = {cart:[]}
export const cartReducer = (store= cart, {type, payload}) => {
    switch(type){
        case CART:
            return {...store, cart:payload}
        default:
        return store
    }
}

