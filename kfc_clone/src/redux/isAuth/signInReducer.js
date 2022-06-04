import { isAuth } from "./SigninAction"
const init ={isAuth: false}

export const isAuthReducer = (store= init, {type, payload}) => {
    switch (type) {
        case isAuth:
            return {...store, isAuth:payload}
        default:
            return store
    }
}