import { CAT } from "./categoryAction"

const category = {category:[]}

export const categoryReducer = (store=category,{type,payload}) => {
    switch (type) {
        case CAT:
            return { ...store, category: payload }
        default:
            return store
    }
    
}