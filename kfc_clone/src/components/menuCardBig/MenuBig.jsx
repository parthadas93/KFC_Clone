import "./menuBig.css"
import { Button } from "../main_button/Button"
import { cartAction } from "../../redux/reduxCart/cartAction"
import { useDispatch } from "react-redux"
import { postCart } from "../../redux/reduxCart/cartAction"

export const MenuBig = ({ e }) => {

    const dispatch= useDispatch()

    const postItem = (data) => {
      dispatch(postCart(data))
      // console.log(data)
    }
    return <>
        <div>
     
    <div className="menu_big_main">
           
        <div className="menuBig">
        <img className="menuImg" src={e.img} alt="" />
        <h4>{e.title}</h4>
        <h6>{e.type}</h6>
        <h5>₹{e.price}</h5>
            <h6 className="menuDes">{e.des}</h6>
                    <Button onClick={()=>{postItem({...e, qty:1})}} >Add to cart</Button>
        </div>
    </div>
  </div>
    </>
    
    
    
}