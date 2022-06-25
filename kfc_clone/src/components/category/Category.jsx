import { useState, useEffect } from "react"
import { getCategory } from "../../redux/data/dataAction"
export const Category = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getCategory()
    },[])
    
    return <>
    
    
    
    
    </>
}