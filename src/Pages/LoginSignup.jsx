import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
          <button className='loginsignup-btn'>Continue</button>
          <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By Continuing I agree to the terms and conditions</p>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
