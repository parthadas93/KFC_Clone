import React from "react";
import "./checkout.css";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import { Button } from "../main_button/Button";
import { Modal, ModalHeader } from "reactstrap"
import {Select} from 'antd'

//anted forms
import {  Form, Input, InputNumber } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */
const onFinish = (values) => {
  console.log(values);
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="86">+91</Option>
      {/* <Option value="87">+87</Option> */}
    </Select>
  </Form.Item>
);




export const Checkout = () => {

  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [adress, setAdress] = useState(null)
  const [show, setShow] = useState(false)
  const [form, setForm] = useState([])
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
  
  const onFinish = (values) => {
    console.log(values);
    navigate('/payment')
  };


  return <div className="checkout_main">
    <div className="checkoutAdressDiv">
      <h4>Set you delivery details</h4>
      <span className="location" onClick={() => { setShow(true) }}>Use My Current Location <i class="fa-solid fa-location-dot"></i></span>
      <br />
      <span className="location" onClick={()=>{setShow(false)}}>Enter manually</span>
      <br />
      <br />


      {show ? <div>  <h5>{adress.display_name}</h5>
      
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
   
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
          {/* <Form.Item name={['user', 'adress']} label="Adress"
          rules={[
            {
              required: true,
            },
          ]}>
        <Input.TextArea />
      </Form.Item> */}
          
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Continue Payment
        </Button>
      </Form.Item>
    
    </Form>
      
 
      
      
      
      
      </div> : 
      
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
   
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
          <Form.Item name={['user', 'adress']} label="Adress"
          rules={[
            {
              required: true,
            },
          ]}>
        <Input.TextArea />
          </Form.Item>
          

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Continue Payment
        </Button>
      </Form.Item>
    
    </Form>
      
      
      
      }
        <br />
      


      
      
      {/* <Button onClick={() => {
       navigate('/payment')
        
      }}>Continue to Payment</Button> */}

<Modal size="lg" isOpen={modal} toggle={()=>setModal(!modal)}>
          <ModalHeader toggle={()=>setModal(!modal)}>Please fill all the flilds</ModalHeader>
        </Modal>
      {/* <button onClick={()=>setModal(true)}>jhd</button> */}

    </div>
   
   <div><img className="checkout_main_img" src="../checkoutBucket.avif" alt="" /></div>
 

  </div>
};

//      {/* <InputGroup name="name" size="sm" className="mb-3" onChange={(e)=>formData(e)}>
{/* <Form.Control
placeholder="Enter your name"
aria-label="Small"
aria-describedby="inputGroup-sizing-sm"
/>
</InputGroup>

<InputGroup name='mobile' size="sm" className="mb-3" onChange={(e)=>formData(e)}>
<Form.Control
placeholder="Enter your mobile number"
aria-label="Small"
aria-describedby="inputGroup-sizing-sm"
/>
</InputGroup>


<Form.Control name='email' type="email" placeholder="Enter email" onChange={(e)=>formData(e)}/>
<Form.Text className="text-muted">
We'll never share your email with anyone else.
</Form.Text>
</div> : <Form action="">

<InputGroup name='name' size="sm" className="mb-3" onChange={(e)=>formData(e)}>
<Form.Control
placeholder="Enter your name"
aria-label="Small"
aria-describedby="inputGroup-sizing-sm"
/>
</InputGroup>

<InputGroup name='mobile' size="sm" className="mb-3" onChange={(e)=>formData(e)}>
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

<Form.Control name='adress_1'  placeholder="Adress line 1" onChange={(e)=>formData(e)} />
<Form.Text className="text-muted">

</Form.Text>

<Form.Control name='adress_2'  placeholder="Adress line 2"  onChange={(e)=>formData(e)}/>
<Form.Text className="text-muted">

</Form.Text>

</Form> */}