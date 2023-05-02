import React, { useState } from 'react';
import Css from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login2({ Data }) {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/customers/login', formState)
      console.log(response.data)   
      alert('Logged in Successfully');
      navigate("/")
    } catch (error) {
      console.error(error)
      alert('Failed to Log in');
    }
    // navigate("")
  };

  return (
    <div className={Css.row}>
       <div className={Css.col2}>
         <div className={Css.bgr} style={{ backgroundImage: `url(${Data.img})` }}></div>
       </div>
      <div className={Css.col2}>
        <div className={Css.container}>
          <h1>Login</h1>

          <form className={Css.form} method='post' onSubmit={handleSubmit}>
            <input
              type='email' placeholder='Enter Email' className={Css.inp} value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
            <br />
            <input
              type='password' placeholder='Enter Password' className={Css.inp} value={formState.password}
              onChange={(e) => setFormState({ ...formState, password: e.target.value })}
            />
            <br />

            <button type='submit' className={Css.btn}>
              <b>Login</b>
            </button>
          </form>

          <p>
            <b>Don't have an account?</b> <Link to='/register'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login2;


