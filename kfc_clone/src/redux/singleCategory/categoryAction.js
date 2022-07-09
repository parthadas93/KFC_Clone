//action type
import axios from "axios"
export const CAT = "CAT"

//action type

export const categoryAction = (data) => {
    return {
        type: CAT,
        payload: data
    }
}

export const getCategory = (category) => (dispatch) => {
    axios.get(`https://kfcclone.herokuapp.com/${category}`).then((res) => {
        dispatch(categoryAction(res.data))
        // console.log("category")
    })
}
