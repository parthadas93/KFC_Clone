import "./nav.css";
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
export const Navbar = () => {
  const user = useSelector((store)=>store.isAuth.isAuth)
  return (
    <>
      <div className="nav_main">
        <div className="left_side">
                  <img className="logo_img" src="/logo.svg" alt="" />
                
          <b><Link className="link" to="/menu">Menu</Link> </b>
          <b><Link className="link" to="/menu">Deals</Link> </b>
        </div>
        <div className="right_side">
          <span>
            <img src="/login2.png" alt="" />
          </span>
          <b><Link className="link" to="/signup">{ !user ? "Signup": "My Account"}</Link> </b>

                  <img className="cart_img" src="/cart.svg" alt="" />
                 
        </div>
      </div>
    </>
  );
};
