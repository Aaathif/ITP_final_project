import React, { useState } from "react";
import Css from './Reg.module.css'
import { Link } from 'react-router-dom'
import axios from "axios";

function Signup({ Data }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    address: "",
    contactNo: "",
    dateOfBirth: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    // const { name, value } = event.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //send data to backend using Axios
    axios.post('http://localhost:8000/api/customers/register', formData)
      .then(response => {
        console.log(response.formData);
        alert("User Registered Successfully")
        setFormData({
          firstName: "",
          lastName: "",
          username: "",
          address: "",
          contactNo: "",
          dateOfBirth: "",
          email: "",
          password: ""
        })
      })
      .catch(error => {
        console.log(error);
        alert("Failed to Register Customer")
      })

    // Perform signup logic here
  };

  return (
      <div className={Css.row}>
      <div className={Css.col2}>
         <div className={Css.container}>
           <h1>Lets Make Your Order</h1>
      <form className={Css.form} method='post' onSubmit={handleSubmit}>
          <input 
            type="text" name= "firstName" className={Css.inp} onChange={handleChange} value={formData.firstName}
            placeholder='Enter First Name'
          />
        <br />
          <input 
            type="text" name= "lastName" className={Css.inp} value={formData.lastName} onChange={handleChange}
            placeholder='Enter Last Name'
          />
        <br />
          <input 
            type="text"  name= "username" className={Css.inp} value={formData.username} onChange={handleChange}
            placeholder='Enter Username'
          />
        <br />
          <input 
            type="text"  name= "address" className={Css.inp} value={formData.address} onChange={handleChange}
            placeholder='Enter address'
          />
        <br />
          <input 
            type="text"  name= "contactNo" className={Css.inp} value={formData.contactNo} onChange={handleChange}
            placeholder='Enter Contact No'
          />
          <br />
          <input 
            type="date"  name= "dateOfBirth" className={Css.inp} value={formData.dateOfBirth} onChange={handleChange}
            placeholder='Enter Date-of-Birth'
            
          />
        <br />
          <input type="email"  name= "email" className={Css.inp} value={formData.email} onChange={handleChange}
          placeholder='Enter Email'
          />
        <br />
          <input type="password"  name= "password" className={Css.inp} value={formData.password} onChange={handleChange}
          placeholder='Enter Password'
          />

        <br />
        <button type='submit' className={Css.btn} ><b>Sign up</b></button>
      </form>
      <p><b>Already Have An Account ?</b> <Link to='/login'>Login</Link></p>
      </div>
    </div>
    <div className={Css.col2}>
        <div className={Css.bgr} style={{ backgroundImage: `url(${Data.img})` }}></div>
      </div>
    </div>
  );
}

export default Signup;
