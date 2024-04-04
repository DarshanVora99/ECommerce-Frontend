import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContex } from '../../Contex/ShopContex';

const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContex);
    return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="E Commerce Logo"/>
            <p>E Commerce</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link to='/'>Shop</Link></li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link></li>
            <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Womens</Link></li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link></li>
        </ul>

        <div className="nav-login-cart">
            <Link to='/signup'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="Cart Icon"/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>

  )
}

export default Navbar