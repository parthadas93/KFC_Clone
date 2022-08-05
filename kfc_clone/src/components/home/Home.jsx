import "./home.css";
import { Button } from "../main_button/Button";
import { Carousels } from "../Carousels/Carousels";
import { useSelector } from "react-redux";
import { SmallCards } from "../smallCards/SmallCards";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate= useNavigate()
  const user = useSelector((store) => store.isAuth.isAuth);
  return (
    <>
      <div className="black">
        <b>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</b>
        <Button onClick={() => {
          navigate('/menu')
        }}>Start Order</Button>
      </div>

      <div className="userDiv">
        <img src="./band.png" alt="" />
        <h1 className="welcome_text">
          WELCOME {!user ? "TO" : "BACK!"}, {!user ? "KFC" : "PARTHA!"}!
        </h1>
        <h5>My Account </h5>
      </div>

      <div className="slider">
        <Carousels
          img1={"./slider1.webp"}
          img2={"./slider2.webp"}
          img3={"./slider3.webp"}
          img4={"./slider4.webp"}
        ></Carousels>
      </div>

      <div className="delivery_option"></div>

      <div className="home_menu">
        <h1 className="browse">BROWSE CATEGORIES</h1>
        <br />
        <div className="home_menu_item">
          <SmallCards
            img={"./treat.jpg"}
            title={"KFC BIG TREAT WEEK"}
                  ></SmallCards>

                  <SmallCards img={"./chickenrolls.jpg"} title={"NEW CHICKEN ROLLS"}></SmallCards>
                  <SmallCards img={"./hotdeals.jpg"} title={"HOT DEALS"}></SmallCards>
                  <SmallCards img={"./buckets.jpg"} title={"CHICKEN BUCKETS"}></SmallCards>
                
              </div>
              
              <div className="home_menu_item">
          <SmallCards
            img={"./box.jpg"}
            title={"BOX MEALS"}
                  ></SmallCards>

                  <SmallCards img={"./burger.jpg"} title={"BURGERS"}></SmallCards>
                  <SmallCards img={"./biriyani.jpg"} title={"BIRIYANI BUCKETS"}></SmallCards>
                  <SmallCards img={"./finger.svg"} title={"View All menu"}></SmallCards>
                
              </div>

      </div>
    </>
  );
};
