import "./nav.css";
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
    <>
      <div className="nav_main">
        <div className="left_side">
                  <img className="logo_img" src="/logo.svg" alt="" />
                
          <b> Menu</b>
          <b>Deals</b>
        </div>
        <div className="right_side">
          <span>
            <img src="/login2.png" alt="" />
          </span>
          <b>signup</b>

                  <img className="cart_img" src="/cart.svg" alt="" />
                 
        </div>
      </div>
    </>
  );
};
