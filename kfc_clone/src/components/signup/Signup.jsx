import { Link, useNavigate } from "react-router-dom"
import { Button } from "../main_button/Button"
import './signup.css'
import { isAuthAction } from "../../redux/isAuth/SigninAction"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

export const Signup = () => {
    const auth = useSelector((store) => store.isAuth.isAuth)
    const [number,setNumber]= useState('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signupFN = () => {
        if (number !== "" && number.length !== 10) {
            dispatch(isAuthAction(true))
            
            navigate('/')
        }
        
    }

    return <>
    
        <div className="signup_main">
            
            <img className="logo_img" src="/logo.svg" alt="" />
            <br />
            <br />
            <h4 className="signup_main_title">LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</h4>

            <input onChange={(e) => {
                setNumber(e.target.value)
            }} className="mobileInput" type="text" placeholder="Phone Number*" />
            <br />
            <br />
            <h6>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</h6>
            <br />
            <br />
            <Button onClick={signupFN}>Continue</Button>
            <br /><br />
            <h6>or</h6>
            <br />
           
            <Button>Skip, continue as guest</Button>

    </div>
    
    
    
    </>
}