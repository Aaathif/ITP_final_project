import React, { useState, useEffect } from 'react'
import Css from './Reg.module.css'
import { Link } from 'react-router-dom'


function Reg({ Data }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, seterror] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length == 0 || email.length == 0 || password.length == 0) {
      seterror(true)
    }
    if (name && email && password) {
      console.log(name, email, password)
    }
  }

  return (
    <div className={Css.row}>
      <div className={Css.col2}>
        <div className={Css.container}>
          <h1>Lets Make Your Order</h1>

          <form className={Css.form} onSubmit={handleSubmit}>
            <input type='text' placeholder="  Enter Name" className={Css.inp} onChange={e => setName(e.target.value)} />
            {error && name.length <= 0 ? <label>Name can't be empty</label> : ""}
            <br />
            <input type='text' placeholder="  Enter Email" className={Css.inp} onChange={e => setEmail(e.target.value)} />
            {error && email.length <= 0 ? <label>Email can't be empty</label> : ""}
            <br />
            <input type='password' placeholder='  Enter password' className={Css.inp} onChange={e => setPassword(e.target.value)} />
            {error && password.length <= 0 ? <label>password can't be empty</label> : ""}
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
    // </div>
  )
}

export default Reg