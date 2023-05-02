import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidbar/Sidebar'
import Css from './PayrollSlip.module.css'

function PayrollSlip() {
  return (
    <div>
      <div>
          <Navbar />
        </div>
        <div className={Css.row1}>
          <div className={Css.col1}>
            <Sidebar />
          </div>
          <div className={Css.col2}>
              <h1>payroll details</h1>
          </div>
          
        </div>
    </div>
  )
}

export default PayrollSlip