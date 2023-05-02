import React from 'react'
import './profileStyles.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Details from './CustomerDetails.module.css'

function Navbar() {
  return (
    <nav className='nav'>
        <ul>
            <CustomLink to="/">Feedback</CustomLink>
            <CustomLink to="/orders">Orders</CustomLink>
            <CustomLink to="/payments">Payments</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar
