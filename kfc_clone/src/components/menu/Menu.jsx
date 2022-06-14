import "./menu.css";
import { MenuBig } from "../menuCardBig/MenuBig";
import axios from "axios"
import { useEffect, useState } from "react"



export const Menu = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/chicken_rolls').then((res) => {
      setData(...data, res.data)
      // console.log(res.data)
    })
  },[])
  return (
    <div className="menu_main">
      <div className="menu_list">
        <img src="./band.png" alt="" />
        <h3>KFC MENU</h3>
        <ul>
          <li>KFC BIG TREAT WEEK</li>
          <li>NEW CHICKEN ROLLS</li>
          <li>HOT DEALS</li>
          <li>CHICKEN BUCKETS</li>
          <li>BOX MEALS</li>
          <li>BURGERS</li>
          <li>BIRYANI BUCKETS</li>
          <li>SNACK</li>
          <li>BEVERAGES & DESSERTS</li>
        </ul>
      </div>

      <div className="menu_item">

        {data.map((e) => {
          return <>
           
            <MenuBig e={e}></MenuBig>
            



         </>
       })}



      </div>









    </div>
  );
};
