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
    axios.get("http://localhost:8080/allData").then((res) => {
      dispatch(dataAction(res.data))
      
    });
}

export const getCategory = (category) => (dispatch) => {
    axios.get(`http://localhost:8080/${category}`).then((res) => {
        console.log('category', res.data)
    })
}