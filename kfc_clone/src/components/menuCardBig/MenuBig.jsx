import "./menuBig.css"
import {Button} from "../main_button/Button"

export const MenuBig = ({ e }) => {
    return <>
        <div>
     
    <div className="menu_big_main">
           
        <div className="menuBig">
        <img className="menuImg" src={e.img} alt="" />
        <h4>{e.title}</h4>
        <h6>{e.type}</h6>
        <h5>₹{e.price}</h5>
            <h6 className="menuDes">{e.des}</h6>
            <Button>Add to cart</Button>
        </div>
    </div>
  </div>
    </>
    
    
    
}