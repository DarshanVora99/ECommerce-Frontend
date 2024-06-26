import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'

const Footer = () => {
  return (
  
    <div className='footer'>
        
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>E Commerce Website</p>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024. All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer