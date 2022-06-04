import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import { isAuthReducer } from "./signInReducer"
const rootReducer = combineReducers({
    isAuth: isAuthReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
console.log(store.getState())