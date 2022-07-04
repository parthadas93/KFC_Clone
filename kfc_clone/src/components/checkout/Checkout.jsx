import React from "react";
import "./checkout.css";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import { Button } from "../main_button/Button";
import {Modal, ModalHeader} from "reactstrap"

export const Checkout = () => {

  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [adress, setAdress] = useState(null)
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({})
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  
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

  const formData = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
}

  return <div className="checkout_main">
    <div className="checkoutAdressDiv">
      <h4>Set you delivery details</h4>
      <span className="location" onClick={() => { setShow(true) }}>Use My Current Location <i class="fa-solid fa-location-dot"></i></span>
      <br />
      <span onClick={()=>{setShow(false)}}>Enter manually</span>
      <br />
      <br />


      {show ? <div> <h5>{adress.display_name}</h5>
        <br />
      
      <InputGroup size="sm" className="mb-3" onChange={(e)=>formData(e)}>
              <Form.Control
                placeholder="Enter your name"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            </InputGroup>
            
            <InputGroup size="sm" className="mb-3" onChange={(e)=>formData(e)}>
              <Form.Control
              placeholder="Enter your mobile number"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            </InputGroup>
            
           
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>formData(e)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
      </div> : <Form action="">
        
        <InputGroup size="sm" className="mb-3" onChange={(e)=>formData(e)}>
              <Form.Control
                placeholder="Enter your name"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            </InputGroup>
            
            <InputGroup size="sm" className="mb-3" onChange={(e)=>formData(e)}>
              <Form.Control
              placeholder="Enter your mobile number"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            </InputGroup>
            
           
      <Form.Control name="email" type="email" placeholder="Enter email" onChange={(e)=>formData(e)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
    
            <Form.Control  placeholder="Adress line 1" onChange={(e)=>formData(e)} />
            <Form.Text className="text-muted">
             
            </Form.Text>
    
            <Form.Control  placeholder="Adress line 2"  onChange={(e)=>formData(e)}/>
            <Form.Text className="text-muted">
           
            </Form.Text>
    
          </Form>}

      
      
      <Button onClick={() => {
        var flag = 1
        for (key in form) {
          if (key === undefined) {
            return flag = 2
          }
        }

        {
          flag !== 1 ? navigate('/payment') : setModal(true) }
        
      }}>SUBMIT</Button>

<Modal size="lg" isOpen={modal} toggle={()=>setModal(!modal)}>
          <ModalHeader toggle={()=>setModal(!modal)}>Please fill all the flilds</ModalHeader>
        </Modal>
      {/* <button onClick={()=>setModal(true)}>jhd</button> */}

    </div>
   
   <div><img src="../checkout.png" alt="" /></div>
 

  </div>
};

//