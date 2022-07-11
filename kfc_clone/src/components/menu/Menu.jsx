import "./menu.css";
import { MenuBig } from "../menuCardBig/MenuBig";
import axios from "axios";
import { useEffect, useState } from "react";
import { getAllData } from "../../redux/data/dataAction";
import {
  getCategory
} from "../../redux/singleCategory/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

export const Menu = () => {
  const data = useSelector((store) => store.data.data);
  const category = useSelector((store) => store.category.category);


  // console.log("menu page", data)
  // console.log(category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData());
  }, []);
  return (
    <>
      {/* <input type="text" /> */}
      <div className="menu_main">
        <div className="menu_list">
          <img src="./band.png" alt="" />
          <h3
            onClick={() => {
              dispatch(getCategory("allData"));
            }}
          >
            KFC MENU
          </h3>
          <ul>
            <li key={uuidv4()}
              onClick={() => {
                dispatch(getCategory("chickenBuckets"));
              }}
            >
              KFC BIG TREAT WEEK
            </li>
            <li key={uuidv4()}
              onClick={() => {
                dispatch(getCategory("chicken_rolls"));
              }}
            >
              NEW CHICKEN ROLLS
            </li>
            <li key={uuidv4()}
              onClick={() => {
                dispatch(getCategory("hotDeal"));
              }}
            >
              HOT DEALS
            </li>
            <li key={uuidv4()}
              onClick={() => {
                dispatch(getCategory("chicken_bucket"));
              }}
            >
              CHICKEN BUCKETS
            </li>
            <li key={uuidv4()}
              onClick={() => {
                dispatch(getCategory("boxMeal"));
              }}
            >
              BOX MEALS
            </li>
            <li key={uuidv4()}
              onClick={() => {
                dispatch(getCategory("burger"));
              }}
            >
              BURGERS
            </li>
            <li key={uuidv4()}
              onClick={() => {
                dispatch(getCategory("biriyani"));
              }}
            >
              BIRYANI BUCKETS
            </li>
            <li key={uuidv4()}
              onClick={() => {
                dispatch(getCategory("snacks"));
              }}
            >
              SNACK
            </li>
            <li key={uuidv4()}
              onClick={() => {
                dispatch(getCategory("drinks"));
              }}
            >
              BEVERAGES & DESSERTS
            </li>
          </ul>
        </div>

        <div className="menu_item">
          {category.length != 0
            ? category.map((e) => {
                return (
                  <>
                    <MenuBig key={Date.now()} e={e}></MenuBig>
                  </>
                );
              })
            : data.map((e) => {
                return (
                  <>
                    <MenuBig key={Date.now()} e={e}></MenuBig>
                  </>
                );
              })}
        </div>
      </div>
      <br />
      <br/>

      {/* <div className="aaa"></div> */}
    </>
  );
};
