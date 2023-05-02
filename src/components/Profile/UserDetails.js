import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Orders from './Orders';
import Payments from './Payments';
import Feedbacks from './Feedbacks';
import Details from './CustomerDetails.module.css';


function UserDetails() {
     // let Component
  // switch (window.location.pathname){
  //   case "/":
  //     Component = Home
  //     break
  //   case "/pricing":
  //     Component = Pricing
  //     break
  //   case "/about":
  //     Component = About
  //     break
  // }
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Feedbacks />}/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/payments' element={<Payments />}/>
        </Routes>
       {/* <Component /> */}
      </div>
    </div>
  )
}

export default UserDetails
