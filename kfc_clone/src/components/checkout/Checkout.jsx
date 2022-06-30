import React from "react";
import "./checkout.css";
import { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import { Button } from "../main_button/Button";

export const Checkout = () => {

  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [adress, setAdress] = useState(null)
  const [show, setShow]= useState(false)
  
  const getAdress = async (lat, long) => {
    await axios.get(`https://us1.locationiq.com/v1/reverse.php?key=pk.456518217705258731c8c7089e3a45d0&lat=${lat}&lon=${long}&format=json`).then((res) => {
       setAdress(res.data)
       console.log(adress)
   })
 }

  const UseMyGeoLocation = () => {
    
    navigator.geolocation.getCurrentPosition(function (position) { getAdress(position.coords.latitude, position.coords.longitude) })


    //  navigator.geolocation.getCurrentPosition( async function (position) {
    //   setLat(position.coords.latitude)
    //   setLong(position.coords.longitude)
    // console.log("position is :", lat);
    //    console.log("Longitude is :", position);
    //  });
  };
  



  useEffect(() => {
    UseMyGeoLocation()
    getAdress()
  },[adress])



  return <div className="checkout_main">
    <div className="checkoutAdressDiv">
      <h4>Set you delivery details</h4>
      <span className="location" onClick={()=>{setShow(true)}}>Use My Current Location <i class="fa-solid fa-location-dot"></i></span>
      <br />
      <br />


      {show ? <div> <h5>{adress.display_name}</h5>
        <br />
      
      <InputGroup size="sm" className="mb-3">
              <Form.Control
                placeholder="Enter your name"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            </InputGroup>
            
            <InputGroup size="sm" className="mb-3">
              <Form.Control
              placeholder="Enter your mobile number"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            </InputGroup>
            
           
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
      </div> : <Form action="">
        
        <InputGroup size="sm" className="mb-3">
              <Form.Control
                placeholder="Enter your name"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            </InputGroup>
            
            <InputGroup size="sm" className="mb-3">
              <Form.Control
              placeholder="Enter your mobile number"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            </InputGroup>
            
           
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
    
            <Form.Control  placeholder="Adress line 1" />
            <Form.Text className="text-muted">
             
            </Form.Text>
    
            <Form.Control  placeholder="Adress line 2" />
            <Form.Text className="text-muted">
           
            </Form.Text>
    
          </Form>}

      
      
      <Button>SUBMIT</Button>
      


    


    </div>
   
   <div><img src="../checkout.png" alt="" /></div>
 

  </div>
};

