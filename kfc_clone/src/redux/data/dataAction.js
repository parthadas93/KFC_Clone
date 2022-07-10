import axios from "axios"

//action type

export const DATA = "DATA"


//action type

export const dataAction = (data) => {
    return {
        type: DATA,
        payload: data
    }
}

export const getAllData = () => (dispatch) => {
    axios.get("https://kfcclone.herokuapp.com/allItem").then((res) => {
      dispatch(dataAction(res.data))
      
    });
}

