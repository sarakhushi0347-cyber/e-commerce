import React, { useState, useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './Navbar.css';
import logo from '../assets/image.png';
import cart_icon from "../assets/cart_icon.png";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const [toggle, setToggle] = useState(false)

  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="navbar">

      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Menu */}
      <ul className={`nav-menu ${toggle ? "active" : ""}`}>
        
        <li onClick={()=>{setMenu("shop"); setToggle(false)}}>
          <Link to="/">Shop</Link>
          {menu==="shop"?<hr/>:null}
        </li>

        <li onClick={()=>{setMenu("mens"); setToggle(false)}}>
          <Link to="/mens">Men</Link>
          {menu==="mens"?<hr/>:null}
        </li>

        <li onClick={()=>{setMenu("womens"); setToggle(false)}}>
          <Link to="/womens">Women</Link>
          {menu==="womens"?<hr/>:null}
        </li>

        <li onClick={()=>{setMenu("kids"); setToggle(false)}}>
          <Link to="/kids">Kids</Link>
          {menu==="kids"?<hr/>:null}
        </li>

      </ul>

      {/* Login + Cart */}
      <div className="nav-login-cart">

        <Link to="/login">
          <button>Login</button>
        </Link>

        <div className="cart-icon">
          <Link to="/cart">
            <img src={cart_icon} alt="" />
          </Link>

          <div className='nav-cart-count'>
            {getTotalCartItems()}
          </div>
        </div>

      </div>

      {/* Toggle */}
      <div 
        className={`nav-toggle ${toggle ? "open" : ""}`} 
        onClick={()=>setToggle(!toggle)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  )
}

export default Navbar
