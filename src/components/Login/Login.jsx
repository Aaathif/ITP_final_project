import React, { useState, useEffect } from 'react'
import Css from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'


function Login({ Data }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, seterror] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length == 0 || password.length == 0) {
      seterror(true)
    }
    if (email && password) {
      navigate("/");
      console.log(email, password)
    }
  }
  return (
    <div className={Css.row}>
      <div className={Css.col2}>
        <div className={Css.bgr} style={{ backgroundImage: `url(${Data.img})` }}></div>
      </div>
      
      <div className={Css.col2}>
        <div className={Css.container}>
          <h1>LOGIN</h1>

          <form className={Css.form} onSubmit={handleSubmit}>
            <input type='text' placeholder="  Enter Email" className={Css.inp} onChange={e => setEmail(e.target.value)} />
            {error && email.length <= 0 ? <label >Email can't be empty</label> : ""}
            <br />
            <input type='password' placeholder='  Enter password' className={Css.inp} onChange={e => setPassword(e.target.value)} />
            {error && password.length <= 0 ? <label>password can't be empty</label> : ""}
            <br />
            <button type='submit' className={Css.btn} ><b>Login</b></button>
          </form>

          <p><b>Don't Have An Account ?</b> <Link to='/register'>Sign up</Link></p>

        </div>
      </div>
    </div>
    // </div>
  )
}

export default Login