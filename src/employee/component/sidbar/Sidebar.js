import React from 'react'
import css from './Sidebar.module.css'
import { NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import ReceiptIcon from '@mui/icons-material/Receipt';
function Sidebar() {

const navLinkStyles = ({isActive}) =>{
    return {
      fontWeight: isActive ? 'bold' : 'normal'
      
    }
}

  return (
    <div className={css.sidebar}>
      <div className={css.containor}>
        <ul >
          
          <NavLink to="/profile" style={navLinkStyles}  >
            <li><PersonIcon sx={{ fontSize: 30 }} />  PROFILE</li>
          </NavLink>
          <NavLink to ="/attendance" style={navLinkStyles}>
            <li><HowToRegIcon sx={{ fontSize: 30 }}/>ATTENDANCE</li>
          </NavLink>
          <NavLink to="/leave" style={navLinkStyles}>
            <li><DirectionsWalkIcon sx={{ fontSize: 30 }}/> APPLY LEAVE</li>
          </NavLink>
          <NavLink to="/payrollslip" style={navLinkStyles}>
            <li><ReceiptIcon sx={{ fontSize: 30 }} /> PAYROLL SLIP</li>
          </NavLink>
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar