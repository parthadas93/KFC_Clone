import "./menu.css";
import { MenuBig } from "../menuCardBig/MenuBig";
import axios from "axios";
import { useEffect, useState } from "react";
import { getAllData } from "../../redux/data/dataAction";
import { categoryAction, getCategory } from "../../redux/singleCategory/categoryAction";
import { useDispatch, useSelector } from "react-redux";

export const Menu = () => {
  const data = useSelector((store) => store.data.data)
  const category = useSelector((store)=>store.category.category)
  // console.log("menu page", data)
  console.log(category)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch( getAllData())
  }, []);
  return <>
    <div className="menu_main">
      <div className="menu_list">
        <img src="./band.png" alt="" />
        <h3 onClick={()=>{dispatch(getCategory("allData"))}} >KFC MENU</h3>
        <ul>
          <li >KFC BIG TREAT WEEK</li>
          <li onClick={()=>{dispatch(getCategory("chicken_rolls"))}}>NEW CHICKEN ROLLS</li>
          <li onClick={()=>{dispatch(getCategory("hotDeals"))}}>HOT DEALS</li>
          <li onClick={()=>{dispatch(getCategory("chickenBuckets"))}}>CHICKEN BUCKETS</li>
          <li>BOX MEALS</li>
          <li>BURGERS</li>
          <li>BIRYANI BUCKETS</li>
          <li>SNACK</li>
          <li>BEVERAGES & DESSERTS</li>
        </ul>
      </div>
     
      <div className="menu_item">
        
        {category.length != 0 ? category.map((e) => {
          return (
            <>
            <MenuBig e={e}></MenuBig>
            </>
          )
        }) :data.map((e) => {
          return (
            <>
              <MenuBig e={e}></MenuBig>
            </>
          );
        })}
      </div>
    </div>

    

    <div className="aaa"></div>
   
    </>;
};
