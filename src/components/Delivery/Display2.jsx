import React, { useState } from 'react'
import css from './Display2.module.css';
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { HiLocationMarker } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";
// import { BsFillTelephoneFill  } from "react-icons/bs";
import axios from 'axios';
import { Link } from "react-router-dom";

function Display2() {
  const [info, setInfo] = useState({})

  const handleChange = (e) => {
    setInfo((prev) => ({...prev, [e.target.name]: e.target.value}))
  } 


  const handleClick = async (e) => {
    alert("Hello submitted")
    e.preventDefault();
    const data = new FormData();
    data.append("upload_preset", "upload");
    try {
      const newDelivery = {
        ...info,
      };
      await axios.post("http://localhost:8000/api/delivery", newDelivery)
    } catch (err) {
      console.log(err);
    }
  } 

  return (
    <div style={{backgroundImage:`url(https://www.foodscounter.com/assets/images/banner.jpg)`}}>
      <div className={css.bgr1} >
        <div className={css.back}>
            <form className={css.form} onSubmit={handleClick}>
              <input type='text' name="address" placeholder='Enter address' className={css.newAdd} onChange={handleChange}/>
       
              <input type='text' name="city" placeholder='Enter City' className={css.num} onChange={handleChange}/>

              <input type='text' name="phoneNo" placeholder='Enter Phone Number' className={css.num} onChange={handleChange}/>
           
            <Link to={{pathname:`/deliveryEdit/`}}>
              <button className={css.button} style={{backgroundColor: "#C52726", width:'93%', height: '10%'}}>Edit</button>
            </Link>
              <button type="submit" className={css.button} style={{backgroundColor: "#67108F"}}>Continue</button> 
            </form>
        </div>
      </div>
    </div>
  )
}

export default Display2
