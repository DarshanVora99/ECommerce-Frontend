import React from 'react'
import { Link } from 'react-router-dom'
// Link
const Login = () => {
  return (
   
        <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
          <button className='loginsignup-btn'>Login</button>
          <p className="loginsignup-login">Don't have an account? <Link to='/signup'><span>Sign Up</span></Link></p>
          
        </div>
      </div>
    </div>
  
  )
}

export default Login