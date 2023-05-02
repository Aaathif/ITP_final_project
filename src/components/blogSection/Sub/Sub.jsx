import React from 'react'
import css from './Sub.module.css'
import { Link } from "react-router-dom";


function Sub({Data}) {
  return (
    <div className={css.container}>
    <div className={css.row}>
        <div className={css.col} >  

        <img src={Data.img} style={{ height: '300px', width: '400px' , paddingTop:'25px',  paddingBottom:'15px', paddingRight:'0px' }} />
        </div>
         <div className={css.col}>
            <h2>{Data.TextH}</h2>
            <p>{Data.TextP}</p>
            {/* <p>{Data.TextP1}</p>
            <p>{Data.TextP3}</p> */}
          
          <Link to={`/singleBlog/${Data._id}`}>
            <button type="submit" 
            style={{ padding: '6px 16px', backgroundColor: '#67108F', color: '##C52726', border: '1px solid black', borderRadius: '20px 20px 20px 20px', 
            fontSize: '16px', cursor: 'pointer'}}>{Data.Btn}</button>
          </Link>
        </div>
      
    </div>
    </div>
  )
}

export default Sub
