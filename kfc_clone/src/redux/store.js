import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
// import { dataAction } from "./data/dataAction"
import { dataReducer } from "./data/dataReducer"
import { isAuthReducer } from "./isAuth/signInReducer"
import { cartReducer } from "./reduxCart/cartReducer"
import { categoryReducer } from "./singleCategory/categoryReducer"

const rootReducer = combineReducers({
    isAuth: isAuthReducer,
    data: dataReducer,
    category: categoryReducer,
    cart: cartReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
console.log(store.getState())