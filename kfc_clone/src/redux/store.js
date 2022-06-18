import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
// import { dataAction } from "./data/dataAction"
import { dataReducer } from "./data/dataReducer"
import { isAuthReducer } from "./isAuth/signInReducer"
const rootReducer = combineReducers({
    isAuth: isAuthReducer,
    data: dataReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
console.log(store.getState())