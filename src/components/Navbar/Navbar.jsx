import React, {useState} from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
// import icon from '..//../images/Food train logo.png'

  function Navbar() {
    const [active, setActive]= useState("nav_menu");
    const[ToggleIcon, setToggleIcon]= useState("nav_toggler")
    const navToggle =() => {
        active=== "nav_menu"
         ? setActive("nav_menu nav_active")
         : setActive("nav_menu");
 
         /* TogglerIcon */
         ToggleIcon=== "nav_toggler" 
         ? setToggleIcon("nav_toggler toggle")
         : setToggleIcon("nav_toggler")
    };
  return (
    <div className="nav">
        <Link to="/">
        <div className='logoDiv'>
          
          <img src="./images/FoodLogo.png" className="logo" style={{
            position:`relative`,
            width: `15%`,
            height:`auto`,
            float: 'left'
            
          }}
          
          />
          
          <a href="" className="nav_brand">Food Train</a>
        </div></Link>
        <ul className={active}>
            <li className="nav_item"><Link to="/" className="nav_link">Home</Link></li>
            <li className="nav_item"><Link to="/product" className="nav_link">Product</Link></li>
            <li className="nav_item"><Link to="/blog" className="nav_link">Blog</Link></li>
            <li className="nav_item"><Link to="/event" className="nav_link">Event</Link></li>
            <li className="nav_item"><Link to="/contactUs" className="nav_link">Contact Us</Link></li>
            <li className="nav_item"><Link to="/aboutUs" className="nav_link">About Us</Link></li>
            <li className="nav_item"><Link to="/login" className="nav_link">Login</Link></li>
        </ul>
        <div onClick={navToggle} className={ToggleIcon}>   {/**/}
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
        
        </div>
       
    </div>
  )
}

export default Navbar
