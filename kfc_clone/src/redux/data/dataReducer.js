import { DATA } from "./dataAction"
const init = {data:[]}
export const dataReducer = (store = init, {type,payload}) => {
    switch (type) {

        case DATA:
            return {...store, data:payload}

        default:
            return store
    }
}